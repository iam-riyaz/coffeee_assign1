import * as Yup from "yup";

export const companyFormValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    revenue: Yup.number()
      .required('Revenue is required')
      .positive('Revenue must be a positive number'),
    phoneNumber: Yup.string()
      .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
  });
  