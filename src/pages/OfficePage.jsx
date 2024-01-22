import { Link, useParams } from "react-router-dom";
import { OfficeCard } from "../components/OfficeCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const OfficePage = () => {

 const {index}= useParams()
 const companyData= useSelector((state)=>state.company.companies)

 useEffect(()=>{
    console.log(companyData,index)
 },[companyData])

  return (
    <>
      <div className=" mx-10 my-2">
        {/* company section */}
        <div>
          <div className="py-4 border-y border-gray-500">
            <p className="text-xl font-semibold">{companyData[index].name}</p>
          </div>
          <div>

            <div className="pt-4">
              <p className="font-semibold">Address:</p>
              <p>{companyData[index].address}</p>
            </div>

            <div className="pt-4">
              <p className="font-semibold">Revenue:</p>
              <p>${companyData[index].revenue}</p>
            </div>

            <div className=" py-4 border-b border-gray-500 flex justify-between">
              <div>
                <p className="font-semibold">Phone No:</p>
                <p>{companyData[index].phoneNumber}</p>
              </div>
              <div>
                <Link to={"/"}>
                <button className=" rounded-md py-2 px-6 bg-gray-300">
                  Back to Overview
                </button>
                </Link>
              </div>
              
            </div>

          </div>
        </div>

        {/* office section */}
        <p className="text-3xl py-6 ">Offices</p>
        <div className="grid grid-cols-2 gap-10 ">
            {companyData[index].offices.length==0?<p className="text-3xl font-semibold"> No office Found</p> :
            <div>
                {companyData[index].offices.map((data,index)=>{
                    return(

                        <OfficeCard name={data.name}  latitude={data.latitude} longitude={data.longitude} date={data.date} deleteIndex={index} />
                    )
                })}
            </div>
            }
        </div>
      </div>
    </>
  );
};
