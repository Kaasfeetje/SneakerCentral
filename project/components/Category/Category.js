import React from "react";

const Category = ({ image, gender }) => {
    return (
        <div className="relative h-96 w-full lg:h-100">
            <img
                className={`w-full h-full object-cover`}
                src={image}
                alt={`${gender}'s sneaker`}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            <div
                className={`absolute bottom-4 ${
                    gender === "Women"
                        ? "right-4 text-right"
                        : "left-4 text-left"
                }`}
            >
                <h3 className="text-4xl font-medium text-white">{gender}'s</h3>
                <h2 className="text-5xl font-medium text-white">Footwear</h2>
                <button className="mt-4 px-4 py-1 font-bold text-black bg-white rounded-full">
                    Shop now
                </button>
            </div>
        </div>
    );
};

export default Category;
