import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import apiFacade from "../apiFacade";

const CreateShow = () => {

    const [showList, setShowList] = useState([]);
    const [chosen, setChosen] = useState("");
    const [created, setCreated] = useState(false);
    const [updated, setUpdated] = useState(false);

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");


    useEffect(() => {
        const fetch = async() => {
            const shows = await apiFacade.getShows();

            setShowList(shows);
        }

        fetch();

    }, [])


    const btnHandler = (event) => {

        if (name !== "" && duration !== "" && location !== "" && startDate !== "" && startTime !== ""){

            if(event.target.value === "create"){
                createShow();
                console.log(chosen, event.target.value);
            }else if(event.target.value === "update"){
                console.log("This is an update id:", chosen);
                updateShow();
                console.log(chosen, event.target.value);
            }

            window.location.reload();
        }
    }

    const createShow = () => {
        setCreated(true);
        apiFacade.createShow(name,duration,location,startDate,startTime);
    }

    const updateShow = () => {
        setUpdated(true);
        apiFacade.updateShow(chosen,name,duration,location,startDate,startTime);
    }

    const clickHandler = () => {
        setChosen(event.target.value)
    }

    return (
        <div>
            <h1 className="title">Create/update show</h1>

            <div className="labelContainer">

                <Link to="/adminpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>


                <div className="dropdownContainer festivalDropdown">
                    <div className="dropdown">
                        <select onClick={clickHandler} name="shows" id="shows">

                            <option selected="true" value="">Choose a show to update:</option>

                            {showList.map((show, index) => {
                                return(
                                    <option key={index} value={show.id}>{show.name}</option>
                                )
                            })}

                        </select>
                    </div>
                </div>

                <div className="labelContainer">
                    <label htmlFor="name">Name:</label>
                    <input onChange={() => {setName(event.target.value)}} className="labelItem" type="text" id="name" placeholder="Magishow"/>

                    <label htmlFor="duration">Duration (minutes):</label>
                    <input onChange={() => {setDuration(event.target.value)}} className="labelItem" type="number" id="duration" placeholder="ex. 45"/>

                    <label htmlFor="location">Location:</label>
                    <input onChange={() => {setLocation(event.target.value)}} className="labelItem" type="text" id="location" placeholder="ex. Scene 3"/>

                    <label htmlFor="startDate">Start date:</label>
                    <input onChange={() => {setStartDate(event.target.value)}} className="labelItem" type="text" id="startDate" placeholder="ex. 16-04-2022"/>

                    <label htmlFor="startTime">Start time:</label>
                    <input onChange={() => {setStartTime(event.target.value)}} className="labelItem" type="text" id="startTime" placeholder="ex. 13:30"/>

                </div>

                {chosen === "" ?
                    (<div>
                        <button onClick={btnHandler} value="create" className="btn btn-success labelBtn">Create show</button>
                    </div>)
                    :
                    (<div>
                        <button onClick={btnHandler} value="update" className="btn btn-success labelBtn">Update show</button>
                    </div>)
                }


                {/*This section is not usable when using the 'window.location.reload()' */}
                {created === true ?
                    (<div className="signedUpTextContainer">
                        <h5 className="title" style={{color: 'green'}}>The show has been created</h5>
                    </div>)
                    : (<></>)
                }

                {updated === true ?
                    (<div className="signedUpTextContainer">
                        <h5 className="title" style={{color: 'green'}}>The show has been updated</h5>
                    </div>)
                    : (<></>)
                }

            </div>

        </div>
    );
};

export default CreateShow;