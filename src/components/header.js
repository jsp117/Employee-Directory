import React from "react";
import Search from "./searchbar";

function Header({search}) {
    return (
        <div className="header">
            Employee Directory
            <Search search={search}/>
        </div>
    )
}

export default Header;