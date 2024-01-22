import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteOffice } from "../redux/companyAction";

export const OfficeCard = ({
  name,
  latitude,
  longitude,
  date,
  deleteIndex,
}) => {
  const { index } = useParams();
  const companyData = useSelector((state) => state.company.companies);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const userConfirmed = window.confirm("are you sure, you want to DELETE ?");

    if (userConfirmed) {
      dispatch(deleteOffice(index, deleteIndex));
    }
  };

  useEffect(() => {
    console.log(companyData);
  }, [companyData]);

  return (
    <>
      <div className="border border-gray-400 rounded-md">
        <div className="m-2">
          <div className=" flex justify-between py-2 border-b border-gray-400">
            <p className="text-lg font-semibold">{name}</p>
            <p
              onClick={handleDelete}
              className="font-semibold text-lg cursor-pointer"
            >
              ✖
            </p>
          </div>

          <div className=" pt-4">
            <p className="font-semibold">Location</p>
            <p>Lat:{latitude}</p>
            <p>Log:{longitude}</p>
          </div>
          <div className=" pt-4">
            <p className="font-semibold">Office start Data</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};
