import React, { useEffect, useState } from "react";
import { fetchDataFromApi, postDataToApi, removeDataFromApi } from "../API/api";

const BidRequests = () => {
  const [bids, set_bids] = useState();
  useEffect(() => {
    GetBidRequest();
  }, []);
  const reject_bid = async (id) => {
    let result = await removeDataFromApi(`/api/bids/` + id);
    window.location.reload();
  };
  const accept_bid = async (item) => {
    const formData = {
      email: item.attributes.email,
      artist: item.attributes.artist,
      bid_amount: item.attributes.bid_amount,
      bid_by_email: item.attributes.bid_by_email,
      bid_by_name: item.attributes.bid_by_name,
      title: item.attributes.title,
      category: item.attributes.category,
      description: item.attributes.description,
      price: item.attributes.price,
      img: item.attributes.img.data.id,
      status: true,
    };
    console.log(formData);
    let { data } = await postDataToApi("/api/bids", formData, false);
    if (data) {
      alert("account created successfully");
    }

    let result = await removeDataFromApi(`/api/bids/` + item.id);
    window.location.reload();
  };
  async function GetBidRequest() {
    let res = await fetchDataFromApi(
      `/api/bids?populate=*&filters[email]=${localStorage.getItem(
        "USER_EMAIL"
      )}`
    );
    set_bids(res.data);
  }
  return (
    <div>
      {bids && bids.length > 0 && (
        <div className="mt-12">
          <h1 className="mb-8 text-2xl text-white">Bid Requests</h1>
          {bids.map((item) => (
            <div key={item.id} className="my-10">
              <table className="min-w-full text-left text-black bg-white rounded table-auto">
                <thead className="font-medium border-b">
                  <tr>
                    <th className="px-6 py-4">Title:</th>
                    <th className="px-6 py-4">Bid Price:</th>
                    <th className="px-6 py-4">Bid By</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {requests?.data?.map((request, idx) => { */}

                  <tr>
                    <td className="px-6 py-4"> {item.attributes.title}</td>
                    <td className="px-6 py-4"> {item.attributes.bid_amount}</td>
                    <td className="px-6 py-4">
                      Email: {item.attributes.bid_by_email}
                      <br /> Name: {item.attributes.bid_by_name}
                    </td>
                    <td className="px-6 py-4">
                      <>
                        <button
                          onClick={() => {
                            accept_bid(item);
                          }}
                          className="px-8 py-2 bg-green-400 rounded"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            reject_bid(item.id);
                          }}
                          className="px-8 py-2 ml-4 bg-red-400 rounded"
                        >
                          Reject
                        </button>
                      </>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BidRequests;
