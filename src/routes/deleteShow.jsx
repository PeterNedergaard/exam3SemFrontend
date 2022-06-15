import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const DeleteShow = () => {

    const [showList, setShowList] = useState([]);
    const [chosen, setChosen] = useState("");


    useEffect(() => {
        const fetch = async() => {
            const shows = await apiFacade.getShows();

            setShowList(shows);
        }

        fetch();

    }, [])


    const clickHandler = (event) => {
        setChosen(event.target.value);
    }

    const btnHandler = () => {
        if(chosen !== ""){
            deleteShow();
            window.location.reload();
        }
    }

    const deleteShow = () => {
        apiFacade.deleteShow(chosen);
    }

    return (
        <div>
            <h1 className="title">Delete a show</h1>

            <div className="deleteContainer">
                <Link to="/adminpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>
                <div className="dropdownContainer festivalDropdown">
                    <div className="dropdown">
                        <select onClick={clickHandler} name="guests" id="guests">

                            <option selected="true" value="">Choose a show:</option>

                            {showList.map((show, index) => {
                                return(
                                    <option key={index} value={show.id}>{show.name}</option>
                                )
                            })}

                        </select>
                    </div>
                </div>

                <div>
                    <button onClick={btnHandler} className="btn btn-danger">Delete show</button>
                </div>

            </div>

        </div>
    );
};

export default DeleteShow;