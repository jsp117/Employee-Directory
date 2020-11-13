import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then((data) => {
                console.log(data);
                setUsers(data.data.results);
                setLoading(false);
            })
    }, [])

    return (
        // displays loading if users = 0
        <div>{!loading ? users.map(x => {
            return <div key={x.login.uuid}>{x.email}</div>;
        }) : "Loading..."}</div>

    )
}

export default Main;