import { IconViewer, MUIconType } from '../../common/IconViewer';
import { ReactNode } from 'react';
import { Box, ListItemIcon, MenuItem, MenuItemProps, Tooltip } from '@mui/material';

export type CustomMenuItemProps = {
  icon?: MUIconType;
  text?: ReactNode;
  color?: string;
  info?: ReactNode;
  tooltip?: ReactNode;
} & MenuItemProps;

export default function CustomMenuItem({
  icon,
  text,
  color,
  info,
  tooltip,
  sx,
  children,
  ...props
}: CustomMenuItemProps ) {

  return (
    <Tooltip title={tooltip} placement={'right'}>
      <Box>
        <MenuItem
          {...props}
          sx={{
            color: color,
            '.MuiListItemIcon-root': {color: color},
            '&:hover': {color: 'text.primary', backgroundColor: color},
            '&:hover .MuiListItemIcon-root': {color: 'text.primary'},
            ...sx,
          }}
        >
          {icon && (
            <ListItemIcon>
              <IconViewer icon={icon} fontSize="small"/>
            </ListItemIcon>
          )}
          <ListItemIcon>
            {text}
            {children}
          </ListItemIcon>
          {info}
        </MenuItem>
      </Box>
    </Tooltip>
  );
}
