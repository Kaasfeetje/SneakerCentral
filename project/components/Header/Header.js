import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MenuIcon from "../Icons/MenuIcon";
import XIcon from "../Icons/XIcon";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import Search from "./Search";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="z-10 fixed flex justify-between items-center bg-white w-full">
            <div className="ml-4">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div
                className={`${
                    isOpen ? "hidden" : "block"
                } absolute right-4 top-4 md:hidden`}
                onClick={() => setIsOpen(true)}
            >
                <MenuIcon />
            </div>
            <nav
                className={`${
                    isOpen ? "block" : "hidden"
                } absolute w-2/3 h-screen right-0 top-0 bg-white md:static md:h-auto md:flex md:w-full md:px-2`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute right-4 top-4 md:hidden`}
                >
                    <XIcon />
                </div>
                <ul className="pt-16 h-full flex flex-col md:flex-row md:items-center md:pt-0 md:w-full">
                    <li className="py-4 md:py-0 md:px-4">
                        <Link href="/products/men">Men</Link>
                    </li>
                    <li className="py-4 md:py-0 md:px-4">
                        <Link href="/products/women">Women</Link>
                    </li>
                    <li className="py-4 md:py-0 md:px-4">
                        <Link href="/products">All</Link>
                    </li>
                    <li className="mt-auto md:mt-0 md:ml-auto md:px-4">
                        <Search />
                    </li>
                    <li className="flex items-center font-medium">
                        <Link href="/cart">
                            <div className="cursor-pointer">
                                <span className="md:hidden">Cart</span>
                                <ShoppingCartIcon />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
