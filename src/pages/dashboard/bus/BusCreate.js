import { paramCase, capitalCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';
// _mock_
import { _userList } from '../../../_mock';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import BusNewEditForm from '../../../sections/@dashboard/bus/BusNewEditForm';

// ----------------------------------------------------------------------

export default function BusCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Create a new bus">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new bus' : 'Edit bus'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Bus', href: PATH_DASHBOARD.bus.buslist },
            { name: !isEdit ? 'New Bus' : capitalCase(name) },
          ]}
        />

        <BusNewEditForm isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
