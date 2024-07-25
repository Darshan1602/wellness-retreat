import React from "react";
import PropTypes from "prop-types";

const Item = ({ title, image, description, date, location, price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
       <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt="productimage"
          className="w-[200px] block object-cover transition-all duration-1000 h-[200px] mr-40 p-1 rounded-xl"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-16 line-clamp-2 text-black">{title}</h4>
        <div className="flex flex-col gap-2">
          <div className="text-gray-50">{description}</div>
          <div className="text-gray-50">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          <div className="text-gray-50">{location}</div>
          <div className="text-gray-50">${price}</div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;