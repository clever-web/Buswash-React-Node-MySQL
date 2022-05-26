import { filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  users: [],
  employees: [],
  customers: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },

    // GET USERS
    getUserSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },

    // GET EMPLOYEES
    getEmployeeSuccess(state, action) {
      state.isLoading = false;
      state.employees = action.payload;
    },
    // Edit Employee
    editEmployeeSuccess(state, action) {
      state.isLoading = false;
      state.customers = action.payload;
    },

    // GET CUSTOMERS
    getCustomerSuccess(state, action) {
      state.isLoading = false;
      state.customers = action.payload;
    },
    // Edit Customer
    editCustomerSuccess(state, action) {
      state.isLoading = false;
      state.customers = action.payload;
    },
    // DELETE EMPLOYEES
    deleteEmployee(state, action) {
      const deleteEmployee = filter(state.employees, (employees) => employees.id !== action.payload);
      state.employees = deleteEmployee;
    },

    deleteCustomer(state, action) {
      const deleteCustomer = filter(state.customers, (customers) => customers.id !== action.payload);
      state.customers = deleteCustomer;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export function getProfile() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/account/profile');
      dispatch(slice.actions.getProfileSuccess(response.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/account/users');
      dispatch(slice.actions.getUserSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getEmployees() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/account/getemployee');
      dispatch(slice.actions.getEmployeeSuccess(response.data.employees));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getCustomers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/account/getcustomer');
      dispatch(slice.actions.getCustomerSuccess(response.data.customers));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function addEmployee({ data }) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/addemployee', data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteEmployee(employeeId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/delemployee', { employeeId });
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function editCustomer({ data }) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/editcustomer', data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function editEmployee({ data }) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/editemployee', data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteCustomer(customerId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/delcustomer', { customerId });
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function addCustomer({ data }) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/account/addcustomer', data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
