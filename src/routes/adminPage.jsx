import React from 'react';
import ApiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const AdminPage = () => {

        return (
            <div>
                {ApiFacade.getRoles() === "admin" ?
                    (<div>
                        <h1 className="title">Admin page</h1>


                        <div className="link-container">

                            <Link to="/createfestival" style={{textDecoration: 'none', color:'black'}}>
                                <button className="btn btn-light menuBtn firstMenuBtn">
                                    Create/Update festival
                                </button>
                            </Link>

                            <Link to="/createshow" style={{textDecoration: 'none', color:'black'}}>
                                <button className="btn btn-light menuBtn">
                                    Create/update show
                                </button>
                            </Link>

                            <Link to="/createguest" style={{textDecoration: 'none', color:'black'}}>
                                <button className="btn btn-light menuBtn">
                                    Create/update guest
                                </button>
                            </Link>

                            <Link to="/deleteshow" style={{textDecoration: 'none', color:'black'}}>
                                <button className="btn btn-light menuBtn">
                                    Delete a show
                                </button>
                            </Link>

                        </div>


                    </div>)
                    :
                    (<h1 className="title">You are not an admin</h1>)
                }
            </div>
        );
};


export default AdminPage;