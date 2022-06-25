import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import CartAmount from "../components/CartAmount/CartAmount";
import { CartContext } from "../components/Context/CartContext";
import Header from "../components/Header/Header";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const checkout = async (cart) => {
        console.log(cart);
        const req = await fetch("/api/checkout_session", {
            body: JSON.stringify(cart),
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            mode: "no-cors",
        });

        const { id } = await req.json();
        console.log("Id", id);

        const stripe = await stripePromise;

        if (stripe) {
            stripe.redirectToCheckout({ sessionId: id });
        }
    };

    return (
        <div>
            <Header />
            <div className="pt-16"></div>
            <CartContext.Consumer>
                {({ cart, removeFromCart, changeAmount }) => (
                    <div>
                        {cart.map((cartItem) => (
                            <div
                                key={cartItem.product._id}
                                className="flex items-center justify-between px-6"
                            >
                                <div>
                                    <img src={cartItem.product.image} />
                                    <h5 className="pr-8">
                                        {cartItem.product.name} -{" "}
                                        {cartItem.product.brand}
                                    </h5>
                                </div>
                                <div className="flex">
                                    <CartAmount
                                        type={"number"}
                                        value={cartItem.amount}
                                        onChange={(newAmount) =>
                                            changeAmount(
                                                cartItem.product._id,
                                                newAmount
                                            )
                                        }
                                    />
                                    <button
                                        className="pl-4"
                                        onClick={() =>
                                            removeFromCart(cartItem.product._id)
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button onClick={() => checkout(cart)} role="link">
                            Checkout
                        </button>
                    </div>
                )}
            </CartContext.Consumer>
        </div>
    );
};

export default Cart;
