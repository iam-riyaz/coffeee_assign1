import { useDispatch } from "react-redux"
import { deleteCompany } from "../redux/companyAction"
import { Link } from "react-router-dom"

export const CompanyCard=({name,address,revenue,phone,index})=>{

    const dispath= useDispatch()

    const handleRemove=(index)=>{

      const userConfirmed=  window.confirm("are you sure, you want to DELETE ?")

        if(userConfirmed)
        {

            dispath(deleteCompany(index))
        }
    }

    const handleClick=(index)=>{
       
    }
    return(
        <>
        <div className="border border-gray-600 rounded-md w-full">
            <div className="m-2">
                <div className="flex justify-between py-2 border-b border-gray-500">
                <p className="text-xl font-semibold ">{name}</p>
                <p className="text-md font-bold cursor-pointer" onClick={()=>handleRemove(index)}>✖</p>
                </div>
                <Link to={`/company/${index}`}>
                <div className="cursor-pointer" onClick={()=>handleClick(index)}>
                    <div className="pb-4">
                        <p className="font-semibold text-md">Address:</p>
                        <p>{address}</p>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold text-md">Revenue:</p>
                        <p>{revenue}</p>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold text-md">Phone No:</p>
                        <p>{phone}</p>
                    </div>

                </div>
                </Link>


            </div>

        </div>
        </>
    )
}