import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MainNavbar from '../common/main-sidebar/MainNavbar';

type AppLayoutProps = {};

export default function AppLayout({}: AppLayoutProps) {
  return (
    <Box sx={{ height:'100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <MainNavbar />
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
    </Box>
  );
}
