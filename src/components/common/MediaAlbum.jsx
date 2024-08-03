import React from "react";
import PropTypes from "prop-types";
import { mediaalbum} from "../../data/albums-data.js";
import { Link } from "react-router-dom";

const MediaAlbum = () => {
  return (
    <section className="relative w-full mt-8 py-4 ">
      
      <div className="w-full ">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mediaalbum.map((data) => (
            <Link to='#'>
            <div key={data.id} className="flex flex-col items-center transition duration-500 cursor-pointer hover:scale-105">
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

MediaAlbum.propTypes = {
  mediaalbum: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MediaAlbum;
