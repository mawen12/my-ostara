import { PropsWithChildren, RefObject } from 'react';
import { PopperProps } from '@mui/material';

export type ContextMenuPopperProps = Omit<
  PopperProps,
  'disablePortal' | 'popperOptions' | 'open' | 'anchorEl' | 'placement'
> &
  PropsWithChildren<any> & {
    id?: string;
    contextMenuRef?: RefObject<HTMLElement>;
    disabled?: boolean;
    onContextMenuChange?: (open: boolean) => void;
  };

export default function ContextMenuPopper({
  id = 'context-menu-popper',
  contextMenuRef,

                                          }) {

}
