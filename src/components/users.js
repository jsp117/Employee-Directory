import react from "react";

function Users({loading, users}) {
    return (
        <div>{!loading ? users.map(x => {
            return <div key={x.login.uuid}>{x.email}</div>;
        }) : "Loading..."}</div>
    )
}

export default Users;