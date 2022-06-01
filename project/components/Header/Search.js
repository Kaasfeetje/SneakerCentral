import React, { useRef, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const inputRef = useRef();

    const onSubmit = (e) => {
        if (e) e.preventDefault();
        setSearchQuery("");
    };

    const onClick = () => {
        if (searchQuery) {
            return onSubmit();
        }
        if (!isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        setIsOpen(!isOpen);
    };

    return (
        <form className="flex items-center" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full ${
                    isOpen ? "md:visible" : "md:invisible"
                } border-2 border-darkBrown px-4 rounded-full mr-2`}
                type="text"
                placeholder="Search..."
            />
            <button type="button" onClick={onClick}>
                <SearchIcon />
            </button>
        </form>
    );
};

export default Search;
