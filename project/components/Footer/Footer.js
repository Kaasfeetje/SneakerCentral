import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col bg-grayishBlue">
            <div className="flex flex-col justify-center py-4 text-beige md:flex-row md:justify-evenly">
                <nav>
                    <ul>
                        <li className="text-center font-bold">Links</li>
                        <li className="text-center">Cart</li>
                        <li className="text-center">All products</li>
                        <li className="text-center">Men</li>
                        <li className="text-center">Women</li>
                    </ul>
                </nav>

                <form className="flex flex-col px-4 pt-4">
                    <h5 className="text-2xl text-center font-bold pb-4">
                        Subscribe to the newsletter
                    </h5>
                    <input
                        className="rounded-full p-2 pl-8 text-darkBrown"
                        type="email"
                        placeholder="Email..."
                    />
                </form>
            </div>
            <small className="text-center py-2 text-beige">
                &copy; Copyright 2022 Kaasfeetje
            </small>
        </footer>
    );
};

export default Footer;
