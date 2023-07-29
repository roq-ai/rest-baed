import * as yup from 'yup';

export const smtpServerValidationSchema = yup.object().shape({
  server_address: yup.string().required(),
  startup_id: yup.string().nullable(),
});
