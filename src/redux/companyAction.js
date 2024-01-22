
export const createCompany = (companyData) => {
    return {
      type: 'CREATE_COMPANY',
      payload: companyData,
    };
  };

  export const deleteCompany=(index)=>{
    return{
        type: 'DELETE_COMPANY',
        payload:index
    }
  }
  