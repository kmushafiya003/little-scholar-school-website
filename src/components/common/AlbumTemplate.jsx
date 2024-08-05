import React from "react";
import PropTypes from "prop-types";
import { photoalbum } from "../../data/albums-data.js";
import { Link } from "react-router-dom";


const AlbumTemplate = () => {
  return (
    <section className="relative w-full mt-8 py-4  ">

      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photoalbum.map((data) => (
            <Link to='#' key={data.id}>
            <div  className="flex flex-col items-center transition duration-500 cursor-pointer hover:scale-105">
                <img src={data.image} alt="" className="object-cover h-48 w-80" />
                <h3 className="mt-2 text-sm text-center">
                    {data.title.length > 50 ? data.title.substring(0, 50) + "..." : data.title}
                </h3>
            </div>
        </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

PhotoAlbum.propTypes = {
  photoalbum: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default PhotoAlbum;