// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../../../../hooks/useSettings';
// components
import Page from '../../../../components/Page';
import EmployeesList from './EmployeesList';

// ----------------------------------------------------------------------

export default function Employees() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Employees">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <EmployeesList />
      </Container>
    </Page>
  );
}
