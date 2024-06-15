import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";

import CommissionForm from "./CommissionForm";
import Productcard from "./Productcard";
import { fetchDataFromApi } from "../API/api";
import { useParams } from "react-router-dom";

const Artist = () => {
  const { artist_email } = useParams();
  const [Artist, setArtist] = useState();
  const [Artist_data, setArtist_data] = useState();

  useEffect(() => {
    GetArtistDetails();
    GetArtistArtworks();
  }, []);
  const GetArtistDetails = async () => {
    let res = await fetchDataFromApi(
      `/api/auths?populate=*&filters[email]=${artist_email}`
    );
    setArtist(res.data);
  };
  const GetArtistArtworks = async () => {
    let res = await fetchDataFromApi(
      `/api/alls?populate=*&filters[email]=${artist_email}`
    );
    setArtist_data(res.data);
  };

  const [form, set_form] = useState(false);

  return (
    <div>
      {form && <CommissionForm />}
      {Artist && Artist.length > 0 && (
        <div className="mt-32">
          <div className="">
            <div className="flex mb-32 text-white gap-9 ">
              <div className="relative w-32 h-32">
                <img
                  className="max-w-full overflow-hidden rounded-full "
                  src="/CV-Satya.jpeg"
                  alt="Satya"
                  layout="fill"
                  objectFit="cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-4">
                <h1 className="mb-1 mb-4 text-3xl font-bold text-white">
                  {Artist[0].attributes.name}
                </h1>
                <h3 className="mb-1 mb-4 text-3xl font-bold text-white">
                  {Artist[0].attributes.email}
                </h3>
                <div className="flex gap-[600px]">
                  <button
                    onClick={() => {
                      set_form(true);
                    }}
                    className="px-12 py-2 text-black bg-green-200 border rounded"
                  >
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4 text-3xl text-green-200">artworks</div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {Artist_data &&
                  Artist_data.length > 0 &&
                  Artist_data.map((item) => <Productcard artwork={item} />)}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artist;
