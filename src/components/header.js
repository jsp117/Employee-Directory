import React from "react";
import Search from "./searchbar";

function Header({ onSubmit, results }) {
    return (
        <h3 className="header container-fluid">
            Employee Directory
            <Search onSubmit={onSubmit} results={results} />
        </h3>
    )
}

export default Header;