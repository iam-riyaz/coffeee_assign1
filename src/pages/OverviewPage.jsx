import { useSelector } from "react-redux";
import { CompanyCard } from "../components/CompanyCard";
import { CompanyForm } from "../components/CompanyForm";
import { OfficeForm } from "../components/OfficeForm";
import { useEffect } from "react";

export const OverviewPage = () => {
  const companyData = useSelector((state) => state.company.companies);

  useEffect(() => {
    console.log("rrrrrr", companyData);
  }, [companyData]);

  return (
    <>
      <div className=" m-1 border-2">
        {/* forms section */}
        <div className="flex justify-center m-1 border-b-2 p-4">
          {/* company form */}
          <div className="flex-1  ">
            <CompanyForm />
          </div>
          {/*office form  */}
          <div className="flex-1  border-l-2 ">
            <OfficeForm />
          </div>
        </div>
        {/* companies cards section */}
        <div className="m-10">
          <p className="text-2xl m-2">Companies</p>
          <div className="grid grid-cols-2 gap-10 ">
            { companyData.length==0?<p className="text-3xl font-semibold"> No Company Found</p> :<div>
            {companyData.map((data, index) => {
              return (
                <CompanyCard
                  index={index}
                  name={data.name}
                  address={data.address}
                  revenue={data.revenue}
                  phone={data.phoneNumber}
                  className="w-1/2"
                />
              );
            })}
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};
