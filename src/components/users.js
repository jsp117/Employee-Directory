import react from "react";

function Users({ loading, users }) {
    return (
        <div>
            <div className="col">{!loading ? users.map(x => {
                return <div><div key={x.login.uuid}>Email: {x.email}</div>
                <div className="col">Name: {x.name.title} {x.name.first} {x.name.last} <div> {x.location.city} {x.location.country}</div></div></div>;
            }) : "Loading..."}</div>
            
        </div>
    )
}

export default Users;