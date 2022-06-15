import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const AllShows = () => {

    const [showList, setShowList] = useState([]);

    useEffect(() => {
        const fetch = async() => {
            const shows = await apiFacade.getShows();

            setShowList(shows)
        }

        fetch();

        console.log(showList)

    },[])


    return (
        <div>
            <h1 className="title">All shows</h1>

            <div className="backBtnContainer">
                <Link to="/userpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>
            </div>

            <div className="table-container">
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Duration (min)</th>
                        <th scope="col">Location</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">StartTime</th>
                    </tr>
                    </thead>
                    <tbody>

                    {showList.map((show, index) => {

                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{show.name}</td>
                                <td>{show.duration}</td>
                                <td>{show.location}</td>
                                <td>{show.startDate}</td>
                                <td>{show.startTime}</td>
                            </tr>
                        )

                    })}

                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default AllShows;