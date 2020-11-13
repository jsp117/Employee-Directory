import React from "react";

function Search({ search }) {
    return (
        <div className="container">
            <label>Employee: </label>
            <form className="form-group">
                <input className="form-control" type="text" placeholder="Enter Employee Name">
                </input><br />
                <button className="btn btn-dark" onClick={search}>Search</button>
            </form>
        </div>
    )
}

export default Search;