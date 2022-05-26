// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';
import OrderList from './OrderList';

// ----------------------------------------------------------------------

export default function Orders() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Orders">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <OrderList />
      </Container>
    </Page>
  );
}
