import React from "react";
import ResturantCard from "../ResturantCard/ResturantCard";

const ResturantView = ({ resturants, isLast, handleLoadMore }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-left mt-10">
        Big, small, we have it all
      </h1>
      {resturants?.length === 0 && (
        <p className="text-gray-500 text-center text-4xl mt-10">
          {" "}
          No Restaurant{" "}
        </p>
      )}
      <div className="resturant-list flex flex-wrap flex-col sm:flex-row w-full">
        {resturants?.length > 0 &&
          resturants?.map((resturantObj) => (
            <ResturantCard key={resturantObj._id} {...{ resturantObj }} />
          ))}
      </div>
      {!isLast && (
        <div className="load-more">
          <button
            type="button"
            onClick={handleLoadMore}
            className="bg-indigo-400 rounded-lg p-3 text-white font-bold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ResturantView;
