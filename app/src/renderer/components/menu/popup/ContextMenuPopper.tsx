import { PropsWithChildren } from 'react';
import { PopperProps } from '@mui/material';

export type ContextMenuPopperProps = Omit<
  PopperProps,
  'disablePortal' | 'popperOptions' | 'open' | 'anchorEl' | 'placement'
> & PropsWithChildren<any>
  & {
  id?: string;
  disabled?: boolean;
  onContextMenuChange?: (open: boolean) => void;
};

