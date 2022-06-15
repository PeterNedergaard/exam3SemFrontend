import React, {useEffect, useState} from 'react';
import "../create.css";
import apiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const CreateFestival = () => {

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("");

    const [festivalList, setFestivalList] = useState([]);
    const [chosen, setChosen] = useState("");

    const [created, setCreated] = useState(false);


    useEffect(() => {
        const fetch = async() => {
            const festivals = await apiFacade.getFestivals();

            setFestivalList(festivals);
        }

        fetch();

    }, [])


    useEffect(() => {


    }, [chosen])


    const btnHandler = (event) => {

        if (name !== "" && city !== "" && startDate !== "" && duration !== ""){

            if(event.target.value === "create"){
                createFestival();
            }else if(event.target.value === "update"){

            }

        }
    }

    const createFestival = () => {
        setCreated(true);
        apiFacade.createFestival(name,city,startDate,duration);
    }

    const updateFestival = () => {
        setCreated(true);
        apiFacade.createFestival(name,city,startDate,duration);
    }

    const clickHandler = (event) => {
        setChosen(event.target.value)
    }

    return (
        <div>
            <h1 className="title">Create/Update festival</h1>

            <div className="labelContainer">

                <Link to="/adminpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>


                <div className="dropdownContainer festivalDropdown">

                    <div className="dropdown">
                        <select onClick={clickHandler} name="guests" id="guests">

                            <option selected="true" value="">Choose to update:</option>

                            {festivalList.map((festival, index) => {
                                return(
                                    <option key={index} value={festival.id}>{festival.name}</option>
                                )
                            })}

                        </select>
                    </div>


                </div>

                <label htmlFor="name">Name:</label>
                <input onChange={() => {setName(event.target.value)}} className="labelItem" type="text" id="name" placeholder="ex. Roskilde festival"/>

                <label htmlFor="city">City:</label>
                <input onChange={() => {setCity(event.target.value)}} className="labelItem" type="text" id="city" placeholder="ex. København"/>

                <label htmlFor="startDate">Start date:</label>
                <input onChange={() => {setStartDate(event.target.value)}} className="labelItem" type="text" id="startDate" placeholder="ex. 12-04-2022"/>

                <label htmlFor="duration">Duration (days):</label>
                <input onChange={() => {setDuration(event.target.value)}} className="labelItem" type="text" id="duration" placeholder="ex. 7"/>


                {chosen === "" ?
                    (<div>
                        <button onClick={btnHandler} value="create" className="btn btn-success labelBtn">Create festival</button>
                    </div>)
                    :
                    (<div>
                        <button onClick={btnHandler} value="update" className="btn btn-success labelBtn">Update festival</button>
                    </div>)
                }


                {created === true ?
                    (<div className="signedUpTextContainer">
                        <h5 className="title" style={{color: 'green'}}>The festival has been created</h5>
                    </div>)
                    :
                    (<></>)
                }
            </div>

        </div>
    );
};

export default CreateFestival;