// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../../../../hooks/useSettings';
// components
import Page from '../../../../components/Page';
import CustomerList from './CustomerList';

// ----------------------------------------------------------------------

export default function Customers() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Customers">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CustomerList />
      </Container>
    </Page>
  );
}
