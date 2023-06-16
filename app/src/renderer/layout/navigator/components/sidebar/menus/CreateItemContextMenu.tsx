import { ContextMenuPopperProps } from '../../../../../components/menu/popup/ContextMenuPopper';
import { useNavigatorTree } from '../../../../../contexts/NavigatorTreeContext';
import { useMemo } from 'react';

type CreateItemContextMenuProps = ContextMenuPopperProps;

export default function CreateItemContextMenu({disabled, ...props}: CreateItemContextMenuProps) {
  const { data } = useNavigatorTree();

  const disabledInterval = useMemo<boolean>(
    () => !data || disabled,
    [data, disabled]
  );

  return (
    <COntextMenuPopper disabled={disabledInterval} {...props}>
      <ContextMenuContext.Consumer>
        {({ menuState }) => <CreateItemMenuItems  menuState={menuState} />}
      </ContextMenuContext.Consumer>
    </COntextMenuPopper>
  );
}
