import { useState, useEffect } from 'react';
import { paramCase, capitalCase } from 'change-case';
// router
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { getEmployees } from '../../../../redux/slices/user';
// hooks
import useSettings from '../../../../hooks/useSettings';
// components
import Page from '../../../../components/Page';
import HeaderBreadcrumbs from '../../../../components/HeaderBreadcrumbs';
// sections
import EmployeeNewEditForm from '../../../../sections/@dashboard/employee/EmployeeNewEditForm';

// ----------------------------------------------------------------------

export default function EmployeeCreate() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { name = '' } = useParams();
  const isEdit = pathname.includes('edit');
  const { themeStretch } = useSettings();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const [currentEmployee, setCurrentEmployee] = useState({});
  const { employees } = useSelector((state) => state.user);

  useEffect(() => {
    if (employees) {
      setCurrentEmployee(employees.find((employees) => paramCase(employees.name) === name));
    }
  }, [employees]);

  return (
    <Page title="Create a new employee">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new employee' : 'Edit employee'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Employee', href: PATH_DASHBOARD.employee.employeelist },
            { name: !isEdit ? 'New employee' : capitalCase(name) },
          ]}
        />
        <EmployeeNewEditForm isEdit={isEdit} currentEmployee={currentEmployee} />
      </Container>
    </Page>
  );
}
