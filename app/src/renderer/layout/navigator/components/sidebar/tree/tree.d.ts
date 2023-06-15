import { ItemRO } from '../../../../../definitions/daemon';
import { NodeApi } from 'react-arborist';
import { PopupState } from 'material-ui-popup-state/es/hooks';
import { ContextMenuPopperProps } from "../../../../../components/menu/popup/ContextMenuPopper";

export type TreeItem = ItemRO & { children?: TreeItem[] };

type TreeItemProps = {
  item: ItemRO;
  node?: NodeApi<TreeItem>;
  onCreated?: (item: ItemRO) => void;
};

type TreeItemMenuProps = {
  menuState: PopupState;
} & TreeItemProps;

type TreeItemContextMenuProps = ContextMenuPopperProps & TreeItemProps;
