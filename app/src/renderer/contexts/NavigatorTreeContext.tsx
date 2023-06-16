import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TreeItem } from '../layout/navigator/components/sidebar/tree/tree';
import { ItemRO } from '../definitions/daemon';
import { useItems } from './ItemsContext';
import { urls } from '../routes/urls';
import { buildTree } from '../utils/treeUtils';
import { chain } from 'lodash';

type NavigatorTreeAction = 'expandAll' | 'collapseAll';

export type NavigatorTreeContextProps = {
  data: TreeItem[] | undefined;
  selectedItem: ItemRO | undefined;
  isLoading: boolean;
  isEmpty: boolean;
  hasData: boolean;
  action: NavigatorTreeAction | undefined;
  performAction: (action: NavigatorTreeAction) => void;
  getNewItemOrder: () => Number;
};

const NavigatorTreeContext = React.createContext<NavigatorTreeContextProps>(
  undefined!
);

interface NavigatorTreeProviderProps extends PropsWithChildren<any> {}

const NavigatorTreeProvider: FunctionComponent<NavigatorTreeProviderProps> = ({
  children,
}) => {
  const { folders, applications, instances, items, getItem } = useItems();
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();

  const [action, setAction] = useState<NavigatorTreeAction | undefined>(
    undefined
  );

  const data = useMemo<TreeItem[] | undefined>(() => {
    return folders && applications && instances
      ? buildTree([...folders, ...applications, ...instances])
      : undefined;
  }, [folders, applications, instances]);
  const isLoading = useMemo<boolean>(() => !data, [data]);
  const isEmpty = useMemo<boolean>(() => !!data && data.length === 0, [data]);
  const hasData = useMemo<boolean>(() => !!data && data?.length > 0, [data]);

  useEffect(() => {
    if (items && params.id) {
      const item = items.find((i) => i.id === params.id);
      if (!item) {
        navigate(urls.home.url);
      }
    }
  }, [items]);

  const performAction = useCallback((actionPerform: NavigatorTreeAction) => {
    setAction(actionPerform);
  }, []);

  useEffect(() => {
    if (action) {
      setAction(action);
    }
  }, [action]);

  const selectedItem = useMemo<ItemRO | undefined>(() => {
    if (!params.id) {
      return undefined;
    }
    const item = getItem(params.id);
    if (!item) {
      return undefined;
    }
    return item;
  }, [items, params.id]);

  const getNewItemOrder = useCallback((): number => {
    return data?.length
      ? chain(data)
          .map<number>((item) => item.sort ?? 0)
          .max()
          .value() + 1
      : 1;
  }, [data]);

  return (
    <NavigatorTreeContext.Provider
      value={{
        data,
        selectedItem,
        isLoading,
        isEmpty,
        hasData,
        action,
        performAction,
        getNewItemOrder,
      }}
    >
      {children}
    </NavigatorTreeContext.Provider>
  );
};

const useNavigatorTree = (): NavigatorTreeContextProps => {
  const context = useContext(NavigatorTreeContext);
  if (!context)
    throw new Error(
      'NavigatorTreeContext must be used inside NavigatorTreeProvider'
    );
  return context;
};

export { NavigatorTreeContext, NavigatorTreeProvider, useNavigatorTree };
