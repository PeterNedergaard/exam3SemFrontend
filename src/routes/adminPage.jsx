import React from 'react';
import ApiFacade from "../apiFacade";

const AdminPage = () => {

        return (
            <div>
                {ApiFacade.getRoles() === "admin" ?
                    (
                        <h1 className="title">Admin page</h1>
                    )
                    :
                    (<h1 className="title">You are not an admin</h1>)
                }
            </div>
        );
};


export default AdminPage;