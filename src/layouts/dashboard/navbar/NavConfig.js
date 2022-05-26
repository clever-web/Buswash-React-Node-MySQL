// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Dashboard',
    items: [
      { title: 'Manage Bus List', path: PATH_DASHBOARD.bus.buslist, icon: ICONS.dashboard },
      { title: 'Tasks', path: PATH_DASHBOARD.task.tasklist, icon: ICONS.dashboard },
      { title: 'Employees', path: PATH_DASHBOARD.employee.employeelist, icon: ICONS.user },
      { title: 'Customers', path: PATH_DASHBOARD.customer.customerlist, icon: ICONS.user },
    ],
  },
];

export default navConfig;
