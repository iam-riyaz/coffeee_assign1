import { Formik, Field, Form, ErrorMessage } from "formik";
import { companyFormValidationSchema } from "../validation/companyFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../redux/companyAction";
import { useEffect } from "react";

export const CompanyForm = () => {
  const companyData = useSelector((state) => state);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    address: "",
    revenue: "",
    phoneNumber: "",
    offices: [],
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(createCompany(values));

    resetForm();
    alert("SUCCESS! company created successfully")
  };

  useEffect(() => {
    console.log(companyData);
  }, [companyData]);

  return (
    <>
      <div className="mx-10">
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          Create Company
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={companyFormValidationSchema}
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
                Address:
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Address"
              />
              <div className="h-4">
                <ErrorMessage className="block" name="address" component="p">
                  {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label
                for="name"
                class="block  text-sm font-medium text-gray-900 dark:text-white"
              >
                Revenue:
              </label>
              <Field
                type="number"
                id="revenue"
                name="revenue"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Revenue"
              />
              <div className="h-4">
                <ErrorMessage className="block" name="revenue" component="p">
                  {(msg) => <p className="text-red-600 text-xs">*{msg}</p>}
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone No:
              </label>
              <Field
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 "
                placeholder="Phone"
              />
              <div className="h-4">
                <ErrorMessage
                  className="block"
                  name="phoneNumber"
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
