import { Formik, Field, Form, ErrorMessage } from "formik";
import { officeFormValidationSchema } from "../validation/officeFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createOffice } from "../redux/companyAction";
export const OfficeForm = () => {

    const companyData= useSelector((state)=>state.company.companies)
    const dispatch= useDispatch()
  const initialValues = {
    name: "",
    latitude: "",
    longitude: "",
    date: "",
    company: "",
  };

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);

    dispatch(createOffice(values.company,values))

    resetForm();
  };

  useEffect(()=>{
    
    console.log(companyData)

  },[companyData])
  

  return (
    <>
      <div className="mx-10">
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Create Office
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={officeFormValidationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div>
              <label
                for="name"
                class="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Name"
              />
              <div className="h-4">
                <ErrorMessage className="block" name="name" component="p">
                  {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label
                for="name"
                class="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Location:
              </label>
              <div className="flex justifiy-between">
                <div className="flex-1 mr-4">
                        <Field
                        type="number"
                        id="latitude"
                        name="latitude"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                        placeholder="Latitude"
                        />
                        <div className="h-4">
                        <ErrorMessage className="block" name="latitude" component="p">
                        {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                        </ErrorMessage>
                        </div>
              </div>
              <div className="flex-1 ml-4">
                        <Field
                        type="number"
                        id="longitude"
                        name="longitude"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                        placeholder="Longitude"
                        />
                        <div className="h-4">
                        <ErrorMessage className="block" name="longitude" component="p">
                        {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                        </ErrorMessage>
                        </div>
              </div>
              </div>
              
            </div>

            <div>
              <label
                for="name"
                class="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Date:
              </label>
              <Field
                type="date"
                id="date"
                name="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Date"
              />
              <div className="h-4">
                <ErrorMessage className="block" name="date" component="p">
                  {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Company:
              </label>
              <Field
                as="select"
                id="company"
                name="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Company"
              >
                <option value="" disabled>
                  Select a company
                </option>
                {companyData.map((data, index) => (
            <option key={index} value={index}>
              {data.name}
            </option>
          ))}
              </Field>
              <div className="h-4">
                <ErrorMessage
                  className="block"
                  name="company"
                  component="p"
                >
                  {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <button
              className=" mt-6 border rounded-md bg-zinc-600 text-white text-lg px-4 py-1 w-full"
              type="submit"
            >
              Create
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
