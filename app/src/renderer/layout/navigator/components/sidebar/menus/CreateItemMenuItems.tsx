import { PopupState } from 'material-ui-popup-state/es/hooks';
import { useNavigatorTree } from 'renderer/contexts/NavigatorTreeContext';
import { useCallback, useMemo } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import CustomMenuItem from 'renderer/components/menu/item/CustomMenuItem';
import { MUIconType } from 'renderer/components/common/IconViewer';
import { getItemTypeIcon } from 'renderer/utils/itemUtils';

type CreateItemMenuItemsProps = {
  menuState: PopupState;
}

export default function CreateItemMenuItems({ menuState }: CreateItemMenuItemsProps) {
  const { getNewItemOrder } = useNavigatorTree();

  const folderIcon = useMemo<MUIconType>(() => getItemTypeIcon('folder'), []);
  const applicationIcon = useMemo<MUIconType>(() => getItemTypeIcon('application'), []);
  const instanceIcon = useMemo<MUIconType>(() => getItemTypeIcon('instance'), []);

  return (
    <>
      <CustomMenuItem icon={folderIcon} text={"Create Folder"} />
      <CustomMenuItem icon={applicationIcon} text={"Create Application"} />
      <CustomMenuItem icon={instanceIcon} text={"Create Instance"} />
    </>
  );
}
