import React, { useEffect, useState } from "react";
// import axios from "axios";
import Table from "../components/Table";
import Header from "../components/header";
import API from "../utils/API";
import "./style.css"

// main should hold users in it, below main should be functional components that show the user, another component for searching

function Main() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [displayUsers, setDisplay] = useState([]);
    const [sort, setSort] = useState("name");


    useEffect(() => {
        console.log("running");
        API.Query()
            .then((data) => {
                console.log(data.data.results);
                setUsers(data.data.results);
                setDisplay(data.data.results);
                setLoading(false);
                // console.log("users: ", users);
            })

        return () => { console.log("cleanup") }

        // if (!search) {
        //     console.log("running")
        //     axios.get("https://randomuser.me/api/?results=200&nat=us")
        //         .then((data) => {
        //             console.log(data);
        //             setUsers(data.data.results);
        //             setLoading(false);
        //         })
        // } else {
        //     axios.get(`https://randomuser.me/api/?${search}`)
        //         .then((data) => {
        //             console.log(data);
        //             setUsers(data.data.results);
        //             setLoading(false);
        //         })
        // }
    }, [])

    useEffect(() => {
        console.log("new search")
    }, [displayUsers])

    function searchUsers(event) {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(event.target.value);
        console.log("search", search);
        let arr = users.filter(x => x.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || x.name.last.toLowerCase().includes(event.target.value.toLowerCase()) || x.phone.includes(event.target.value) || x.email.toLowerCase().includes(event.target.value.toLowerCase()) || x.dob.date.split("T")[0].includes(event.target.value));
        setDisplay(arr);
    }

    return (
        // displays loading if users = 0
        <div>
            <Header onSubmit={searchUsers} results={search} />
            <Table loading={loading} users={displayUsers} />
        </div>

    )
}

export default Main;