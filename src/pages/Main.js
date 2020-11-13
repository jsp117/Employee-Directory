import React, { useEffect, useState } from "react";
// import axios from "axios";
import Table from "../components/Table";
import Header from "../components/header";
import API from "../utils/API";
import "./style.css"


function Main() {
    // initialize states
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [displayUsers, setDisplay] = useState([]);
    const [sortType, setSort] = useState("ascend");

    // initial render
    useEffect(() => {
        // console.log("running");
        API.Query()
            .then((data) => {
                // console.log(data.data.results);
                setUsers(data.data.results);
                setDisplay(data.data.results);
                setLoading(false);
                // console.log("users: ", users);
            })

        return () => { }

    }, [])

    // re-render every time displayUsers changes
    useEffect(() => {
        // console.log("new search or sort");
    }, [displayUsers])

    // search users
    function searchUsers(event) {
        event.preventDefault();
        setSearch(event.target.value);
        let arr = users.filter(x => x.phone.includes(event.target.value) || x.email.toLowerCase().includes(event.target.value.toLowerCase())
            || x.dob.date.split("T")[0].includes(event.target.value)
            || (x.name.first.toLowerCase() + x.name.last.toLowerCase()).includes(event.target.value.toLowerCase().replace(/\s+/g, '')));
        setDisplay(arr);
    };

    // sort arrays
    function sort(event) {
        console.log(event);
        event.preventDefault();
        // console.log("Working");
        let type = event.target.outerText.substring(0, 3).toLowerCase();
        // console.log("type", type);
        let types = {
            nam: "name",
            pho: "phone",
            ema: "email",
            dob: "dob"
        }
        let sort = types[type];
        // console.log("sorttype", sort);
        // let sorted = displayUsers.sort((a, b) => b[sort] - a[sort]);
        let array = displayUsers;
        if (sort === "name") {
            if (sortType === "ascend") {
                array.sort((a, b) => {
                    let fa = a.name.first.toLowerCase(),
                        fb = b.name.first.toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
                // console.log("sorted", array);
                setSort("descend");
            } else {
                array.sort((a, b) => {
                    let fa = a.name.first.toLowerCase(),
                        fb = b.name.first.toLowerCase();
                    if (fa < fb) {
                        return 1;
                    }
                    if (fa > fb) {
                        return -1;
                    }
                    return 0;
                });
                // console.log("sorted", array);
                setSort("ascend");
            }
        } else if (sort === "phone") {
            if (sortType === "ascend") {
                array.sort((a, b) => {
                    return parseInt(a.phone.substring(1, 3)) - parseInt(b.phone.substring(1, 3));
                });
                setSort("descend");
            } else {
                array.sort((a, b) => {
                    return parseInt(b.phone.substring(1, 3)) - parseInt(a.phone.substring(1, 3));
                });
                setSort("ascend");
            }
        }
        else if (sort === "dob") {
            if (sortType === "ascend") {
                array.sort((a, b) => {
                    return a.dob.age - b.dob.age;
                });
                setSort("descend");
            } else {
                array.sort((a, b) => {
                    return b.dob.age - a.dob.age;
                });
                setSort("ascend");
            }
        }
        setDisplay([...array]);
    }


    return (
        // displays loading if users = 0
        <div>
            <Header onSubmit={searchUsers} results={search} />
            <Table loading={loading} users={displayUsers} sort={sort} />
        </div>

    )
}

export default Main;