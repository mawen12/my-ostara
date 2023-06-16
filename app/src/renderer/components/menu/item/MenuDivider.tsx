import { Divider, DividerProps } from '@mui/material';

export type MenuDividerProps = DividerProps;

export default function MenuDivider({ sx, ...props }: MenuDividerProps) {
  return (
    <Divider sx={{ my: 1, ...sx }} {...props} />
  );
}
