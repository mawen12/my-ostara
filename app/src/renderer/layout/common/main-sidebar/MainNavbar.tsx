import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { urls } from '../../../routes/urls';
import { AppBar, Box, Divider, Stack, Toolbar } from '@mui/material';
import { COMPONENTS_SPACING, NAVBAR_HEIGHT } from '../../../constants/ui';
import HelpMenu from './navbar/HelpMenu';
import AppFeedbackMenu from './navbar/AppFeedbackMenu';
import SettingsMenu from './navbar/SettingsMenu';

type MainNavbarProps = {};

export default function MainNavbar({}: MainNavbarProps) {
  const navigate = useNavigate();

  const homeHandler = useCallback(() => {
    navigate(urls.home.url)
  }, [navigate]);

  const backHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const forwardHandler = useCallback(() => {
    navigate(1);
  }, [navigate]);

  const isMac = process.platform === 'darwin';

  return (
    <AppBar
      position={'static'}
      sx={{
        minHeight: NAVBAR_HEIGHT,
        display: 'flex',
        '-webkit-user-select': 'none',
        '-webkit-app-region': 'drag',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          flexGrow: 1,
          pl: COMPONENTS_SPACING,
          pr: !isMac ? '0' : COMPONENTS_SPACING
        }}
      >
        <Box
          sx={{
            flexGrow: 1
          }}
        />

        <Stack direction="row" spacing={0.5}>
          <HelpMenu />
          <AppFeedbackMenu />
          <SettingsMenu />
        </Stack>

      </Toolbar>
      <Divider />
    </AppBar>
  );
}
