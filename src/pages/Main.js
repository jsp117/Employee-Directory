import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/users";
import Header from "../components/header";

// main should hold users in it, below main should be functional components that show the user, another component for searching

function Main() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("running")
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then((data) => {
                console.log(data);
                setUsers(data.data.results);
                setLoading(false);
            })
    }, [])
    const searchUsers = useCallback(
        function searchUsers() {
            setUsers([]);
        })


    return (
        // displays loading if users = 0
        <div>
            <Header search={searchUsers} />
            <Users loading={loading} users={users} />
        </div>

    )
}

export default Main;