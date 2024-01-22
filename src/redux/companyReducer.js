const initialState = {
  companies: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COMPANY":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case "DELETE_COMPANY":
      const updatedCompanies = state.companies.filter(
        (company, index) => index !== action.payload
      );
      return {
        ...state,
        companies: updatedCompanies,
      };
    case "CREATE_OFFICE":
      const { index, officeData } = action.payload;
      const targetCompany = state.companies[index];

      console.log({ targetCompany });
      const updatedCompany = {
        ...targetCompany,
        offices: [...targetCompany.offices, officeData],
      };
      return {
        ...state,
        companies: [
          ...state.companies.slice(0, index),
          updatedCompany,
          ...state.companies.slice(index + 1),
        ],
      };

    case "DELETE_OFFICE":
      const { companyIndex, deleteIndex } = action.payload;
      console.log({companyIndex,deleteIndex});
      const deleteCompanyObject = state.companies[companyIndex];

      const updatedOfficeArray= deleteCompanyObject.offices.filter((office,index)=>index!=deleteIndex)
      deleteCompanyObject.offices= updatedOfficeArray

      const updatedCompanyObject = deleteCompanyObject

      return {
        ...state,
        companies: [
          ...state.companies.slice(0, companyIndex),
          updatedCompanyObject,
          ...state.companies.slice(companyIndex + 1),
        ],
      };

    default:
      return state;
  }
};
