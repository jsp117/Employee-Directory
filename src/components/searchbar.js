import React from "react";

function Search({ onSubmit, results }) {
    return (
        <div className="container">
            <label>Employee: </label>
            <form className="form-group">
                <input className="form-control" type="text" placeholder="Enter Employee Name" onChange={onSubmit} value={results}>
                </input><br />
                <button className="btn btn-dark" onClick={onSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Search;