import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price_per_day: yup.number().integer().required(),
  store_id: yup.string().nullable().required(),
});
