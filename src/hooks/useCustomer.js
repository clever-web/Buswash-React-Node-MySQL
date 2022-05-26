/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';

// redux
import { addCustomer, editCustomer, deleteCustomer } from '../redux/slices/user';

// ----------------------------------------------------------------------

export default function useCustomer() {
  const dispatch = useDispatch();

  return {
    // --------------  Editing part ---------------------
    editCustomer: ({ data }) => {
      dispatch(editCustomer({ data }));
    },
    // --------------  Creating part ---------------------
    addCustomer: ({ data }) => {
      dispatch(addCustomer({ data }));
    },

    // --------------  Delete Employee ---------------------
    deleteCustomer: (id) => {
      dispatch(deleteCustomer(id));
    },
  };
}
