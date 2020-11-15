import React from "react";
import Table from "../Table";
import "./style.css";

function Content({loading, users, sort}) {
    return (
        <div className="container push">
            <Table loading={loading} users={users} sort={sort}/>
            <div className="padding"></div>
        </div>
    )
}

export default Content;