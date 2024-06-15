import React from "react";
import { useNavigate } from "react-router-dom";

const Artistform = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="mt-24">
          <h1 className="mb-2 font-bold text-center text-gray-200">
            ARE YOU AN ARTIST?
          </h1>
          <h5 className="mb-24 text-center text-gray-400 text-muted">
            (Please fill out the form to continue)
          </h5>
          <form className="w-full">
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-last-name"
                >
                  Username
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-password"
                >
                  TELL US ABOUT YOU
                </label>
                <textarea
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Bio"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-2 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Butwal"
                />
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Province 1</option>
                    <option>Province 2</option>
                    <option>Province 3</option>
                    <option>Province 4</option>
                    <option>Province 5</option>
                    <option>Province 6</option>
                    <option>Province 7</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
                  htmlFor="grid-zip"
                >
                  Zip
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </div>
            </div>
          </form>
          <div className="upload-profile-picture-container">
            <img
              src="/portrait.avif"
              alt="image"
              className="w-32 h-32"
              sizes="100vw"
            />

            <div>
              <p className="text-white bold">
                DRAG AND DROP YOUR PROFILE PICTURE HERE TO UPLOAD.
              </p>
              <p className="text-gray-300 text-muted">
                ( File must be in .JPG, .PNG or .GIF format and not more than 4
                MB )
              </p>
              <button className="px-3 py-2 text-black bg-green-200 border">
                Upload Picture
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={() => {
              navigate("/chooseform");
            }}
            className="px-16 py-2 text-black bg-green-200 border hover:bg-cyan-500"
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artistform;
