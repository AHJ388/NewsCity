import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="flex items-center justify-center md:mx-4 my-3  max-w-lg">
      <div className="rounded-lg shadow-lg bg-white">
        <span className="text-xs overflow-hidden font-thin py-0 px-2.5 leading-none text-center bg-green-600 text-white rounded">
          {source}
        </span>
        <img className="rounded-t-lg" src={imageurl} alt="Not Available" />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <small className="py-3 px-6 border-t border-gray-300 text-gray-600 text-ellipsis whitespace-nowrap max-w-[200px] overflow-hidden">
            By {!author ? "Unknown" : author} on {date}
          </small>
          <a href={newsurl}>
            <button
              type="button"
              className=" inline-block px-6 py-3 mt-2 hover:font-bold bg-blue-600 hover:scale-105 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
