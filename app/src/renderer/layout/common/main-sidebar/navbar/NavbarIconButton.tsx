import { IconViewer, MUIconType } from '../../../../components/common/IconViewer';
import { Box, IconButton, Tooltip } from '@mui/material';

type NavbarIconButtonProps = {
  titleId: string;
  icon: MUIconType;
  onClick?: () => void;
};

export const NAVBAR_TOOLTIP_DELAY = 1000;

export default function NavbarIconButton({ titleId, icon, onClick }: NavbarIconButtonProps) {
  return (
    <Box sx={{ '-webkit-app-region': 'no-drag' }}>
      <Tooltip title={titleId} enterDelay={NAVBAR_TOOLTIP_DELAY}>
        <IconButton size={'small'} onClick={onClick} sx={{ color: 'text.primary' }}>
          <IconViewer icon={icon} fontSize={'medium'} sx={{ color: 'text.primary' }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

