import React from "react";
import "./style.css"

function Table({ loading, users }) {
    return (
        <div id="table">
            <table className="container-fluid">
                <thead>
                    <tr className="row pt-5">
                        <th className="col">Picture</th>
                        <th className="col">Name</th>
                        <th className="col">Phone</th>
                        <th className="col">Email</th>
                        <th className="col">Date of Birth</th>
                    </tr>
                </thead>
                <tbody>{!loading ? users.map(x => {
                    return <tr key={x.login.uuid} className="row">
                        <td className="col"><img src={x.picture.medium} alt={x.name.first + " " + x.name.last}></img></td>
                        <td className="col">{x.name.title + " " + x.name.first + " " + x.name.last}</td>
                        <td className="col">{x.phone}</td>
                        <td className="col">{x.email}</td>
                        <td className="col">{x.dob.date.split("T")[0]}</td>
                    </tr>;
                }) : "Loading..."}</tbody>
            </table>
        </div>
    )
}

export default Table;