import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TreeItem } from '../layout/navigator/components/sidebar/tree/tree';
import { ItemRO } from '../definitions/daemon';
import { useItems } from './ItemsContext';
import { useNavigate, useParams } from 'react-router-dom';

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

const NavigatorTreeContext = React.createContext<NavigatorTreeContextProps>(undefined!);

interface NavigatorTreeProviderProps extends PropsWithChildren<any> {}

const NavigatorTreeProvider: FunctionComponent<NavigatorTreeProviderProps> = ({ children }) => {
  const {folders, applications, instances, items} = useItems();
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();


}

const useNavigatorTree = (): NavigatorTreeContextProps => {
  const context = useContext(NavigatorTreeContext);
  if (!context) throw new Error('NavigatorTreeContext must be used inside NavigatorTreeProvider');
  return context;
};

export { NavigatorTreeContext, NavigatorTreeProvider, useNavigatorTree};

