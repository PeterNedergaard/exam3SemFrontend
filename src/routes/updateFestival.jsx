import React, {useState} from 'react';
import {Link} from "react-router-dom";

const UpdateFestival = () => {

    const [created, setCreated] = useState(false);


    const btnHandler = () => {
        if (name !== "" && city !== "" && startDate !== "" && duration !== ""){

        }
    }



    return (
        <div>
            <h1 className="title">Update festival</h1>

            <div className="labelContainer">

                <Link to="/adminpage">
                    <button className="btn btn-danger backBtn">Go back</button>
                </Link>

                <label htmlFor="name">Name:</label>
                <input onChange={() => {setName(event.target.value)}} className="labelItem" type="text" id="name" placeholder="ex. Roskilde festival"/>

                <label htmlFor="city">City:</label>
                <input onChange={() => {setCity(event.target.value)}} className="labelItem" type="text" id="city" placeholder="ex. København"/>

                <label htmlFor="startDate">Start date:</label>
                <input onChange={() => {setStartDate(event.target.value)}} className="labelItem" type="text" id="startDate" placeholder="ex. 12-04-2022"/>

                <label htmlFor="duration">Duration (days):</label>
                <input onChange={() => {setDuration(event.target.value)}} className="labelItem" type="text" id="duration" placeholder="ex. 7"/>

                <button onClick={btnHandler} className="btn btn-success labelBtn">Create festival</button>

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

export default UpdateFestival;