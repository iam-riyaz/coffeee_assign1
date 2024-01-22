
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

  export const createOffice=(index,officeData)=>{
    const data= {index,officeData}
    return {
        type:"CREATE_OFFICE",
        payload: data
    }
  }

  export const deleteOffice= (companyIndex, deleteIndex)=>{
    const data ={companyIndex, deleteIndex}
    return {
        type:"DELETE_OFFICE",
        payload:data
    }
  }
  