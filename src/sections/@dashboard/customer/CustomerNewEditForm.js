/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Typography, InputAdornment, IconButton } from '@mui/material';
// Hook
import useCustomer from '../../../hooks/useCustomer';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import { FormProvider, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

CustomerNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentCustomer: PropTypes.object,
};

export default function CustomerNewEditForm({ isEdit, currentCustomer }) {
  const { editCustomer, addCustomer } = useCustomer();

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewCustomerSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    inCharge: Yup.string().required('In Charge is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    garage: Yup.string().required('Garage is required'),
  });

  const defaultValues = useMemo(
    () => ({
      companyName: currentCustomer?.companyName || '',
      inCharge: currentCustomer?.name || '',
      phoneNumber: currentCustomer?.phoneNumber || '',
      garage: currentCustomer?.garage || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentCustomer]
  );

  const methods = useForm({
    resolver: yupResolver(NewCustomerSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (isEdit && currentCustomer) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentCustomer]);

  const onSubmit = async (data) => {
    try {
      if (isEdit) {
        data.id = currentCustomer.id;
        await editCustomer({ data });
        reset();
      } else await addCustomer({ data });
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.customer.customerlist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} sx={{ margin: '0 auto' }}>
          <Card sx={{ p: 3 }}>
            <Box>
              <RHFTextField name="companyName" label="Company Name" sx={{ my: 2 }} />
              <RHFTextField name="inCharge" label="In Charge" sx={{ my: 2 }} />
              <RHFTextField name="phoneNumber" label="Phone Number" sx={{ my: 2 }} />
              <RHFTextField name="garage" label="Garage" sx={{ my: 2 }} />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 2 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Customer' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
