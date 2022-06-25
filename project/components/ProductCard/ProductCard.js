import React from "react";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product, color, textColor }) => {
    return (
        <div className="w-full " style={{ backgroundColor: color }}>
            <img
                className="w-full h-64 object-cover lg:h-96"
                src={product.image}
                alt={`${product.name}-${product.brand}`}
            />
            <h5
                className="w-full flex justify-between items-center px-8 py-2 font-bold text-lg"
                style={{ color: textColor }}
            >
                {product.name} - {product.brand}
                <div>
                    <span className="font-medium opacity-50">
                        ${product.price}
                    </span>
                    <CartContext.Consumer>
                        {({ addToCart }) => (
                            <button
                                style={{ borderColor: textColor }}
                                className="ml-2 border px-2 py-1 rounded-lg"
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        )}
                    </CartContext.Consumer>
                </div>
            </h5>
        </div>
    );
};

export default ProductCard;
