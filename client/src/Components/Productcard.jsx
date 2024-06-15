import React, { useState } from "react";

import { postDataToApi } from "../API/api";
import { useNavigate } from "react-router-dom";

const Productcard = ({ artwork }) => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
      {artwork && (
        <div
          onClick={() => {
            navigate(`/art/${artwork.id}`);
          }}
          className="border rounded-lg shadow dark:border-slate-900 dark:bg-slate-800"
        >
          <img
            key={`allartwork-${artwork.id}`}
            className="w-full h-auto"
            src={
              process.env.REACT_APP_DEV_URL +
              artwork.attributes.img.data.attributes.url
            }
            alt="imagebrowse5"
          />
          <div className="px-[4px] text-white">
            <h2 className="pb-[4px]">{artwork.attributes.artist}</h2>
            <p className="py-[4px] text-lg">
              DESC : {artwork.attributes.description}
            </p>
            <p className="text-xl mb-[10px]">
              Price: &#8360;{artwork.attributes.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productcard;
