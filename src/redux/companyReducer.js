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
        const updatedCompanies = state.companies.filter((company, index) => index !== action.payload);
        return {
            ...state,
            companies:updatedCompanies
        };
    
    default:
      return state;
  }
};
