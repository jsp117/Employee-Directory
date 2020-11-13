import React from "react";

function Search({ onSubmit, results }) {
    return (
        <div className="container">
            <br />
            <form className="form-group">
                <input className="form-control" type="text" placeholder="Enter Employee Name" onChange={onSubmit} value={results}>
                </input><br />
            </form>
        </div>
    )
}

export default Search;