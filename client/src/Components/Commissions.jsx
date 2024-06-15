import React, { useEffect, useState } from "react";

import { MdZoomIn } from "react-icons/md";
import { fetchDataFromApi, removeDataFromApi } from "../API/api";
const Commissions = () => {
  const [commissions, set_commissions] = useState();
  useEffect(() => {
    GetCommissionRequests();
  }, []);
  const reject_Commission = async (id) => {
    let result = await removeDataFromApi(`/api/commissions/` + id);
    window.location.reload();
  };

  const GetCommissionRequests = async () => {
    let res = await fetchDataFromApi(
      `/api/commissions?populate=*&filters[artist_email]=${localStorage.getItem(
        "USER_EMAIL"
      )}`
    );
    set_commissions(res.data);
  };
  return (
    <div>
      {commissions &&
        commissions.length > 0 &&
        commissions.map((item) => (
          <div className="mt-8 text-black">
            <table className="w-full text-left bg-white rounded">
              <thead>
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Reference Image</th>
                  <th className="p-4">Time</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Address</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Request By</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">{item.attributes.commission_by_name}</td>
                  <td className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={
                          process.env.REACT_APP_DEV_URL +
                          item.attributes.reference.data.attributes.url
                        }
                        alt="img"
                        width={120}
                        height={120}
                      />

                      <MdZoomIn className="text-red-500" />
                    </div>
                  </td>
                  <td className="p-4">{item.attributes.time}</td>
                  <td className="p-4">{item.attributes.price}</td>
                  <td className="p-4">{item.attributes.address}</td>
                  <td className="p-4">{item.attributes.contact}</td>

                  <td className="p-4">
                    Email: {item.attributes.commission_by_email}
                    <br />
                    Name: {item.attributes.commission_by_name}
                  </td>
                  <td className="pr-3">
                    <button
                      onClick={() => {
                        reject_Commission(item.id);
                      }}
                      className="px-8 py-2 ml-4 bg-red-400 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default Commissions;
