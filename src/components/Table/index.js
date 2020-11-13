import React from "react";
import "./style.css"

function Table({ loading, users, sort }) {
    return (
        <div className="ml-4 mr-2" id="table">
            <table className="container-fluid text-align">
                <thead>
                    <tr className="row pt-5">
                        <th className="col">Picture</th>
                        <th onClick={sort} className="col sort">Name &#8645;</th>
                        <th onClick={sort} className="col sort">Phone &#8645;</th>
                        <th className="col">Email</th>
                        <th onClick={sort} className="col sort">DOB &#8645;</th>
                    </tr>
                </thead>
                <tbody>{!loading ? users.map(x => {
                    return <tr key={x.login.uuid} className="row">
                        <td className="col"><img className="img-responsive" src={x.picture.medium} alt={x.name.first + " " + x.name.last}></img></td>
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