import React from "react";
import Search from "./searchbar";

function Header({search}) {
    return (
        <div className="header container-fluid">
            Employee Directory
            <Search search={search}/>
        </div>
    )
}

export default Header;