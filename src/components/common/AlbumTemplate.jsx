import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AlbumTemplate = ({data}) => {
  return (
    <section className="relative w-full py-4 mt-8 ">

      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Link to='#' key={item.id}>
            <div  className="flex flex-col items-center transition duration-500 cursor-pointer hover:scale-105">
                <img src={item.image} alt={item.title} className="object-cover h-48 w-80" />
                <h3 className="mt-2 text-sm text-center">
                    {item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}
                </h3>
            </div>
        </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

AlbumTemplate.propTypes = {
  albumtemplate: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default AlbumTemplate;