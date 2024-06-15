import { fetchDataFromApi, postDataToApi } from "../API/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Fragment } from "react";
import React from "react";

const Productitem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bid_amount, set_bid_amount] = useState();
  const [review, set_review] = useState();
  const [fetch_review, set_fetch_review] = useState();

  const [item, setItem] = useState([]);
  const [user_photo, set_user_photo] = useState([]);
  useEffect(() => {
    GetProductItem();
    Get_user_photo();
    GetReviews();
  }, []);

  const handleBidChange = (e) => {
    set_bid_amount(e.target.value);
  };
  const handleReviewChange = (e) => {
    set_review(e.target.value);
  };

  async function GetProductItem() {
    let res = await fetchDataFromApi(`/api/alls?populate=*&filters[id]=${id}`);
    setItem(res.data);
  }
  async function GetReviews() {
    let res = await fetchDataFromApi(
      `/api/reviews?populate=*&filters[art_id]=${id}`
    );
    set_fetch_review(res.data);
  }
  async function Get_user_photo() {
    let res = await fetchDataFromApi(
      `/api/auths?populate=*&filters[email]=${localStorage.getItem(
        "USER_EMAIL"
      )}`
    );

    set_user_photo(res.data[0].attributes.img.data.attributes.url);
  }
  const handleAddToCart = async (id) => {
    const formData = {
      cart: id,
    };

    let { data } = await postDataToApi("/api/carts", formData, false);
    if (data) {
      alert("added to cart successfully");
    }
  };
  const handle_bid_data = async (e) => {
    e.preventDefault();
    console.log(item[0].attributes.img.data.id);

    const formData = {
      email: item[0].attributes.email,
      artist: item[0].attributes.artist,
      bid_amount: bid_amount,
      bid_by_email: localStorage.getItem("USER_EMAIL"),
      bid_by_name: localStorage.getItem("USER_NAME"),
      title: item[0].attributes.title,
      category: item[0].attributes.category,
      description: item[0].attributes.description,
      price: item[0].attributes.price,
      img: item[0].attributes.img.data.id,
      status: false,
    };
    console.log(formData);
    let { data } = await postDataToApi("/api/bids", formData, false);
    if (data) {
      alert("account created successfully");
    }
  };

  const handle_review_data = async (e) => {
    e.preventDefault();
    console.log(item[0].attributes.img.data.id);

    const formData = {
      reviewer_email: localStorage.getItem("USER_EMAIL"),
      reviewer_name: localStorage.getItem("USER_NAME"),
      review_words: review,
      art_id: item[0].id,
    };
    console.log(formData);
    let { data } = await postDataToApi("/api/reviews", formData, false);
    if (data) {
      alert("account created successfully");
    }
  };

  return (
    <Fragment>
      {item && item.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-8 mt-[48px]">
            <div className="bold text-[16px] text-white text-justify ">
              <div className="grid items-center justify-between grid-cols-2">
                <p
                  type="text"
                  name="artistname"
                  onClick={() => {
                    navigate(`/artistprofile/${item[0].attributes.email}`);
                  }}
                >
                  Artist Profile
                </p>
                <div className="">
                  <img
                    className="object-contain w-32 h-32 rounded-full"
                    src={process.env.REACT_APP_DEV_URL + user_photo}
                    alt="artist profile"
                  />
                </div>
                <div
                  className="mb-[140px] mt-[48px]"
                  type="text"
                  name="description"
                >
                  {/* {item.attributes.description} */}
                </div>
              </div>

              <div className="max-w-[255px]">
                <div className="flex flex-col justify-between mb-2">
                  <h5 className="mb-[10px] ">
                    Name: {item[0].attributes.artist}
                  </h5>
                  <div>Price: &#8360; {item[0].attributes.price}</div>
                </div>
                <div className="flex items-center justify-between mb-[24px]">
                  <span className="">Email: {item[0].attributes.email}</span>
                </div>

                <form onSubmit={handle_bid_data}>
                  <div className="text-black mb-[12px]">
                    <h3 className="text-white mb-[8px]">Bid The Artwork</h3>
                    <input
                      className=" text-center text-[#5C6B94] bg-transparent border border-[#5C6B94] py-[2px] px-[8px] "
                      type="number"
                      name="bidprice"
                      step={2000}
                      required
                      value={bid_amount}
                      onChange={handleBidChange}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-[16px]">
                    <button
                      type="submit"
                      value="Submit"
                      className="border border-[#5C6B94] px-[16px] py-[4px]  text-white bg-gradient-to-r from-[#0F131B] to-transparent"
                    >
                      BID NOW
                    </button>

                    <button className="border border-[#5C6B94] px-[16px] py-[4px] bg-gradient-to-r from-[#0F131B] to-transparent">
                      BUY NOW
                    </button>
                  </div>
                </form>

                <button
                  onClick={() => {
                    handleAddToCart(item[0].id);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div>
              <img
                className="border rounded-s border-[#5C6B94] p-[16px]"
                src={
                  process.env.REACT_APP_DEV_URL +
                  item[0].attributes.img.data.attributes.url
                }
                alt="Product Item"
                width={627}
                height={727}
              />
            </div>
          </div>
          <form onSubmit={handle_review_data} className="mt-[76px]">
            <h5 className="text-white mb-[18px]">GIVE REVIEWS</h5>
            <input
              type="text"
              className="w-[1092px] h-[125px] pl-[12px] pt-[4px] bg-transparent border border-[#5C6B94] text-[#5C6B94]"
              placeholder="Leave a Review"
              value={review}
              onChange={handleReviewChange}
            />
            <input type="submit" placeholder="submit" />
          </form>
          <div className="mt-4 text-white">REVIEWS</div>
          {fetch_review &&
            fetch_review.length > 0 &&
            fetch_review.map((item) => (
              <div className="mt-2 text-black bg-slate-50">
                <h2>Message: {item.attributes.review_words}</h2>
                <h3>Email of reviewer: {item.attributes.reviewer_email}</h3>
                <h3>Name of reviewer: {item.attributes.reviewer_name}</h3>
                {console.log(item.attributes.review_words)}
              </div>
            ))}
        </>
      )}
    </Fragment>
  );
};

export default Productitem;
