import * as Yup from "yup";

export const officeFormValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    latitude: Yup.number().required('Latitude is required'),
    longitude: Yup.number().required('Longitude is required'),
    date: Yup.date().required('Date is required'),
    company: Yup.string().required('Company is required'),
  });