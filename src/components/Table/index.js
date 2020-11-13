import React from "react";
import "./style.css"

function Table({ loading, users, sort }) {
    return (
        <div id="table">
            <table className="container-fluid">
                <thead>
                    <tr className="row pt-5">
                        <th className="col">Picture</th>
                        <th onClick={sort} value="name" className="col">Name</th>
                        <th onClick={sort} value="phone" className="col">Phone</th>
                        <th onClick={sort} value="email" className="col">Email</th>
                        <th onClick={sort} value="dob" className="col">Date of Birth</th>
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