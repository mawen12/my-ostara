import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  ApplicationRO,
  FolderRO,
  InstanceRO,
} from '../common/generated_definitions';
import { ItemRO } from '../definitions/daemon';
import { isApplication, isFolder, isInstance } from '../utils/itemUtils';

export type ItemsContextProps = {
  folders: FolderRO[] | undefined;
  applications: ApplicationRO[] | undefined;
  instances: InstanceRO[] | undefined;
  items: ItemRO[] | undefined;
  addItem: (item: ItemRO) => void;
  getItem: (id: string) => ItemRO | undefined;
};

const ItemsContext = React.createContext<ItemsContextProps>(undefined!);

interface ItemsProviderProps extends PropsWithChildren<any> {}

const ItemsProvider: FunctionComponent<ItemsProviderProps> = ({ children }) => {
  const [folders, setFolders] = useState<FolderRO[] | undefined>(undefined);
  const [applications, setApplications] = useState<ApplicationRO[] | undefined>(
    undefined
  );
  const [instances, setInstances] = useState<InstanceRO[] | undefined>(
    undefined
  );

  const items = useMemo<ItemRO[] | undefined>(() => {
    return folders && applications && instances
      ? [...folders, ...applications, ...instances]
      : undefined;
  }, [folders, applications, instances]);

  const addItem = useCallback((item: ItemRO): void => {
    if (isInstance(item)) {
      setInstances((prev) => [
        ...(prev?.filter((i) => i.id !== item.id) ?? []),
        item,
      ]);
    }
    if (isApplication(item)) {
      setApplications((prev) => [
        ...(prev?.filter((i) => i.id !== item.id) ?? []),
        item,
      ]);
    }
    if (isFolder(item)) {
      setFolders((prev) => [
        ...(prev?.filter((i) => i.id !== item.id) ?? []),
        item,
      ]);
    }
  }, []);

  const getItem = useCallback(
    (id: string): ItemRO | undefined => {
      return items?.find((i) => i.id === id);
    },
    [items]
  );

  return (
    <ItemsContext.Provider
      value={{
        folders,
        applications,
        instances,
        items,
        addItem,
        getItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = (): ItemsContextProps => {
  const context = useContext(ItemsContext);
  if (!context)
    throw new Error('ItemsContext must be used inside ItemsProvider');
  return context;
};

export { ItemsContext, ItemsProvider, useItems };
