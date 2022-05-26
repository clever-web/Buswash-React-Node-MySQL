/* eslint-disable prettier/prettier */
import { useDispatch } from 'react-redux';

// redux
import { addEmployee, editEmployee, deleteEmployee } from '../redux/slices/user';

// ----------------------------------------------------------------------

export default function useEmployee() {
  const dispatch = useDispatch();

  return {
    // --------------  Editing part ---------------------
    editEmployee: ({ data }) => {
      dispatch(editEmployee({ data }));
    },
    // --------------  Creating part ---------------------
    addEmployee: ({ data }) => {
      dispatch(addEmployee({ data }));
    },

    // --------------  Delete Employee ---------------------
    deleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
}
