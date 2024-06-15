import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

import React from "react";
import { fetchDataFromApi } from "../API/api";

const Gallery = () => {
  const quotes = [
    "Art enables us to find ourselves and lose ourselves at the same time.  Thomas Merton",
    "The purpose of art is washing the dust of daily life off our souls. Pablo Picasso",
    "Creativity takes courage. Henri Matisse",
    "Art speaks where words are unable to explain.  Mathiole",
    "Every artist was first an amateur. Ralph Waldo Emerson",
    "Art is not what you see, but what you make others see.  Edgar Degas",
    "To create ones own world in any of the arts takes courage.georgia OKeeffe",
    "Art is the only way to run away without leaving home. Twyla Tharp",
    "The artist's world is limitless. It can be found anywhere, far from where he lives or a few feet away. It is always on his doorstep. Paul Strand",
    "A work of art which did not begin in emotion is not art.  Paul Cézanne",
    "Art is the lie that enables us to realize the truth.  Pablo Picasso",
    "Where the spirit does not work with the hand, there is no art.  Leonardo da Vinci",
    "The aim of art is to represent not the outward appearance of things, but their inward significance.Aristotle",
    "Art must be an integral part of the struggle. It can't simply mirror what's taking place. It must aspire to transform or change the conditions that are leading to our collective oppression. Kerry James Marshall",
    "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen. Leonardo da Vinci",
  ];
  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const [featuredItems, setFeaturedItems] = useState([]);
  // function addEventListener(e) {
  //   e.preventDefault();
  //   setshowbox(true);
  // }
  const [showbox, setshowbox] = useState(false);
  useEffect(() => {
    //fetchDataFromApi("...").then(res => setFeaturedItems(res.data)).catch(err => console.log(err));
    getFeaturedItems();
  }, []);
  async function getFeaturedItems() {
    let result = await fetchDataFromApi(`/api/alls?populate=*`);
    setFeaturedItems(result.data);
  }
  if (featuredItems && featuredItems.length > 0) {
    console.log(featuredItems[0].attributes.img.data.attributes.url);
  }
  return (
    <div className="mt-8 ">
      {featuredItems && featuredItems.length > 0 && (
        <div className="grid grid-rows-1 gap-8">
          <div className="flex justify-between gap-8">
            <div className="">
              <p className="font-sans text-white text-8xl bold ">ENJOY</p>
              <p className="font-sans text-4xl text-white bold ">UNIQUNESS</p>
              <p className="text-2xl text-white bold">IN EVERY ART</p>
            </div>
            <div className="w-1/2 ">
              <img
                className=""
                src={
                  process.env.REACT_APP_DEV_URL +
                  featuredItems[0].attributes.img.data.attributes.url
                }
                alt="satya"
              />
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-1/2 transition duration-200 transform rounded-lg shadow-xl opacity-100 hover:opacity-75">
              <img
                className=""
                src={
                  process.env.REACT_APP_DEV_URL +
                  featuredItems[1].attributes.img.data.attributes.url
                }
                alt="satya"
              />
            </div>
            <div className="w-1/2">
              <p className="font-sans text-white text-8xl bold ">A JOURNEY</p>
              <p className="font-sans text-4xl text-white bold ">THROUGH ART</p>
              <button
                id="showBox"
                className="p-2 mt-4 mb-4 uppercase bg-gray-200"
                onClick={() => {
                  setshowbox(!showbox);
                  getRandomQuote();
                }}
              >
                Quotes for the Soul
              </button>
              {showbox && (
                <p class=" transition-all text-white text-1xl w-42 ">{quote}</p>
              )}
            </div>
          </div>
          <p className="font-sans text-4xl text-white bold ">FREEDOM OF ART</p>
          <div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {featuredItems.map((art) => (
                  <img
                    src={
                      process.env.REACT_APP_DEV_URL +
                      art.attributes.img.data.attributes.url
                    }
                    alt="satya"
                    sizes="100vw"
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
