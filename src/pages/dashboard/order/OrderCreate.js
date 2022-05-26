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
import OrderNewEditForm from '../../../sections/@dashboard/order/OrderNewEditForm';

// ----------------------------------------------------------------------

export default function OrderCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="Create a new order">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new order' : 'Edit order'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Task', href: PATH_DASHBOARD.task.tasklist },
            { name: !isEdit ? 'New order' : capitalCase(name) },
          ]}
        />

        <OrderNewEditForm isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
