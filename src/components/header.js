import React from "react";
import Search from "./searchbar";

function Header({onSubmit, results}) {
    return (
        <div className="header container-fluid">
            Employee Directory
            <Search onSubmit={onSubmit} results={results}/>
        </div>
    )
}

export default Header;