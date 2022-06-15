import React from 'react';
import ApiFacade from "../apiFacade";
import {Link} from "react-router-dom";
import "../App.css";

const UserPage = props => {
    return (
        <div>
            {ApiFacade.getRoles() === "user" ?
                (<div>
                    <h1 className="title">User page</h1>

                    <div className="link-container">

                        <Link to="/allshows" style={{textDecoration: 'none', color:'black'}}>
                            <button className="btn btn-light menuBtn firstMenuBtn">
                                All shows
                            </button>
                        </Link>

                        <Link to="/guestsshows" style={{textDecoration: 'none', color:'black'}}>
                            <button className="btn btn-light menuBtn">
                                Guests shows
                            </button>
                        </Link>

                        <Link to="/signup" style={{textDecoration: 'none', color:'black'}}>
                            <button className="btn btn-light menuBtn">
                                Sign up to show
                            </button>
                        </Link>

                    </div>

                </div>)
                :
                (<h1 className="title">You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;