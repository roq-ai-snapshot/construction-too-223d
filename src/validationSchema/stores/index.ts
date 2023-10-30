import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  contact_number: yup.string().required(),
  supplier_id: yup.string().nullable().required(),
});
