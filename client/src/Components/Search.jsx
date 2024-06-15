import { MdClose } from "react-icons/md";
import React from "react";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for Artworks"
          // value={query}
          // onChange={onChange}
        />
        <MdClose
          className="text-black close-btn"
          onClick={() => setShowSearch(false)}
        />
      </div>

      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see what you are looking for.
        </div>

        <div className="search-results">
          {/* {data &&
            data?.data?.map((item) => ( */}
          <div
            // key={item.id}
            className="search-result-item"
            // onClick={() => {
            //   router.push(`/o/${item.id}`);
            //   setShowSearch(false);
            // }}
          >
            <div className="image-container">
              {/* {item.attributes.img.data && ( */}
              {/* <Image
                      // src={`${API_URL}${item.attributes.img.data.attributes.url}`}
                      alt="imagesearched"
                      width={600}
                      height={600}
                    />
                  )} */}
            </div>
            <div className="text-black prod-details">
              <span className="name">
                {/* Product Name: {item.attributes.name} */}
              </span>
              <span className="name">
                Category:
                {/* {item.attributes.categories} */}
              </span>
              <span className="price">
                रू
                {/* {/* {item.attributes.price} */}
              </span>
              <span className="desc">
                Description:
                {/* {item.attributes.description} */}
              </span>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Search;
