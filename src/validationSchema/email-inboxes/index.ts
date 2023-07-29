import * as yup from 'yup';

export const emailInboxValidationSchema = yup.object().shape({
  email_address: yup.string().required(),
  startup_id: yup.string().nullable(),
});
