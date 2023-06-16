import { FunctionComponent } from 'react';
import Page from 'renderer/components/layout/Page';
import { Container, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { COMPONENTS_SPACING } from '../../../constants/ui';
import HomeWelcome from './components/HelloWelcome';

const Home: FunctionComponent = () => {
  return (
    <Page sx={{ height: '100%', display: 'flex', p: 0 }}>
      <Container
        disableGutters
        maxWidth='md'
        sx={{ m: 'auto', p: COMPONENTS_SPACING }}
      >
        <Grid2 container spacing={COMPONENTS_SPACING}>
          <Grid2 xs={12} lg={6}>
            <Stack direction='column' spacing={COMPONENTS_SPACING}>
              <HomeWelcome />
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Page>
  );
}

export default Home;
