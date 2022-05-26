// Path
import { PATH_AUTH } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'LogIn',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: PATH_AUTH.login,
  },
];

export default menuConfig;
