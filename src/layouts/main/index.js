import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
//
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  // const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          py: 5,
          textAlign: 'center',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Container>
          <Logo sx={{ mb: 1, mx: 'auto' }} />
          <Typography variant="caption" component="p">
            <Link href="_blank">admin@admin.com</Link>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
}
