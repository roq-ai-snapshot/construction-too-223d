import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  store_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
