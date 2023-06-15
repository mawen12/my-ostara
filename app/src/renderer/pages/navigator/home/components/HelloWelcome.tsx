import { Button, Card, CardContent, Stack, Typography } from '@mui/material';

type HomeWelcomeProps = {};

export default function HomeWelcome({}: HomeWelcomeProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Welcome to Ostara!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Get started by adding your first Spring Boot actuator instance.
          Monitor and manage your Spring Boot applications with ease. Enjoy!
        </Typography>
        <Stack
          direction={{ sx: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button variant="outlined" color="primary">
            Create Instance
          </Button>
          <Button variant="outlined" color="info">
            Start Demo Instance
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
