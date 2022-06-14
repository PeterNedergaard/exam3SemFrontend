import React from 'react';
import ApiFacade from "../apiFacade";

const UserPage = props => {
    return (
        <div>
            {ApiFacade.getRoles() === "user" ?
                (
                    <h1 className="title">User page</h1>
                )
                :
                (<h1>You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;