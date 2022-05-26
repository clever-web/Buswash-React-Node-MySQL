// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import BusList from './BusList';

// ----------------------------------------------------------------------

export default function Buses() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Buses">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <BusList />
      </Container>
    </Page>
  );
}
