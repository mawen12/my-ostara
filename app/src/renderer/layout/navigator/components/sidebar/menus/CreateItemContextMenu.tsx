import ContextMenuPopper, { ContextMenuPopperProps } from 'renderer/components/menu/popup/ContextMenuPopper';
import { ContextMenuContext } from 'renderer/components/menu/popup/ContextMenuContext';
import { useNavigatorTree } from '../../../../../contexts/NavigatorTreeContext';
import { useMemo } from 'react';
import CreateItemMenuItems from './CreateItemMenuItems';

type CreateItemContextMenuProps = ContextMenuPopperProps;

export default function CreateItemContextMenu({disabled, ...props}: CreateItemContextMenuProps) {
  const { data } = useNavigatorTree();

  const disabledInterval = useMemo<boolean>(
    () => !data || disabled,
    [data, disabled]
  );

  return (
    <ContextMenuPopper disabled={disabledInterval} {...props}>
      <ContextMenuContext.Consumer>
        {({ menuState }) => <CreateItemMenuItems  menuState={menuState} />}
      </ContextMenuContext.Consumer>
    </ContextMenuPopper>
  );
}
