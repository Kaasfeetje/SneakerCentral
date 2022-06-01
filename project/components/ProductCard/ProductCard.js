import React from "react";

const ProductCard = ({ project, color, textColor }) => {
    return (
        <div className="w-full " style={{ backgroundColor: color }}>
            <img
                className="w-full h-64 object-cover lg:h-96"
                src={project.image}
                alt={`${project.name}-${project.brand}`}
            />
            <h5
                className="w-full flex justify-between px-8 py-2 font-bold text-lg"
                style={{ color: textColor }}
            >
                {project.name} - {project.brand}
                <span className="font-medium opacity-50">${project.price}</span>
            </h5>
        </div>
    );
};

export default ProductCard;
