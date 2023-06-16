import { useNavigatorTree } from '../../../../../contexts/NavigatorTreeContext';
import { bindMenu, usePopupState } from 'material-ui-popup-state/hooks';
import { useCallback } from 'react';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import MenuPopover from '../../../../../components/menu/popup/MenuPopover';
import CreateItemMenuItems from './CreateItemMenuItems';

export default function CreateItemMenu() {
  const { data } = useNavigatorTree();

  const menuState = usePopupState({ variant: 'popover'});

  const openHandler = useCallback(() => {
    if (!data) {
      return;
    }
    menuState.open();
  }, [data, menuState]);

  return (
    <>
      <IconButton size={'small'} ref={menuState.setAnchorEl} onClick={openHandler}>
        <AddOutlined fontSize={'medium'} />
      </IconButton>

      <MenuPopover {...bindMenu(menuState)}>
        <CreateItemMenuItems menuState={menuState}/>
      </MenuPopover>
    </>
  );

}
