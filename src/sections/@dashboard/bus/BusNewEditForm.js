import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { countries } from '../../../_mock';
// components
import Label from '../../../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../components/hook-form';

// ----------------------------------------------------------------------

BusNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentBus: PropTypes.object,
};

export default function BusNewEditForm({ isEdit, currentBus }) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const NewBusSchema = Yup.object().shape({
    bus_number: Yup.string().required('Bus number is required'),
    gas_card_code_number: Yup.string().required('Bus numbers is required'),
    bus_register_plate: Yup.string().required('Bus driver name is required'),
  });

  const defaultValues = useMemo(
    () => ({
      bus_company_name: currentBus?.bus_company_name || '',
      bus_numbers: currentBus?.bus_numbers || '',
      bus_driver_name: currentBus?.bus_driver_name || '',
      bus_driver_phone_number: currentBus?.bus_driver_phone_number || '',
      bus_departing_time: currentBus?.bus_departing_time || '',
      bus_arriving_time: currentBus?.bus_arriving_time || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentBus]
  );

  const methods = useForm({
    resolver: yupResolver(NewBusSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentBus) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentBus]);

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.bus.list);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)' },
              }}
            >
              <RHFTextField name="bus_company_name" label="Bus company name" />
              <RHFTextField name="bus_numbers" label="Bus numbers" />
              <RHFTextField name="bus_driver_name" label="Bus driver name" />
              <RHFTextField name="bus_driver_phone_number" label="Bus driver phone number" />
              <RHFTextField name="bus_departing_time" label="Bus departing time" />
              <RHFTextField name="bus_arriving_time" label="Bus arriving time" />
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Bus' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
