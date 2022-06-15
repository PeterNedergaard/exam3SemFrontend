import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const CreateGuest = () => {

    const [guestList, setGuestList] = useState([]);
    const [chosen, setChosen] = useState("");
    const [created, setCreated] = useState(false);
    const [updated, setUpdated] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");


    useEffect(() => {
        const fetch = async() => {
            const guests = await apiFacade.getGuests();

            setGuestList(guests);
        }

        fetch();

    }, [])


    const btnHandler = (event) => {

        if (name !== "" && phone !== "" && email !== "" && status !== ""){

            if(event.target.value === "create"){
                createGuest();
            }else if(event.target.value === "update"){
                updateGuest();
            }

            window.location.reload();
        }
    }

    const createGuest = () => {
        setCreated(true);
        apiFacade.createGuest(name,phone,email,status);
    }

    const updateGuest = () => {
        setUpdated(true);
        apiFacade.updateGuest(chosen,name,phone,email,status);
    }

    const clickHandler = () => {
        setChosen(event.target.value)
    }



    return (
        <div>
            <h1 className="title">Create/update guest</h1>

            <div className="labelContainer">

                <Link to="/adminpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>


                <div className="dropdownContainer festivalDropdown">
                    <div className="dropdown">
                        <select onClick={clickHandler} name="shows" id="shows">

                            <option selected="true" value="">Choose a guest to update:</option>

                            {guestList.map((guest, index) => {
                                return(
                                    <option key={index} value={guest.id}>{guest.name}</option>
                                )
                            })}

                        </select>
                    </div>
                </div>

                <div className="labelContainer">
                    <label htmlFor="name">Name:</label>
                    <input onChange={() => {setName(event.target.value)}} className="labelItem" type="text" id="name" placeholder="ex. Lars"/>

                    <label htmlFor="phone">Phone:</label>
                    <input onChange={() => {setPhone(event.target.value)}} className="labelItem" type="number" id="phone" placeholder="ex. 52693872"/>

                    <label htmlFor="email">Email:</label>
                    <input onChange={() => {setEmail(event.target.value)}} className="labelItem" type="text" id="email" placeholder="ex. lars@gmail.com"/>

                    <label htmlFor="status">Status:</label>
                    <input onChange={() => {setStatus(event.target.value)}} className="labelItem" type="text" id="status" placeholder="ex. status"/>

                </div>

                {chosen === "" ?
                    (<div>
                        <button onClick={btnHandler} value="create" className="btn btn-success labelBtn">Create guest</button>
                    </div>)
                    :
                    (<div>
                        <button onClick={btnHandler} value="update" className="btn btn-success labelBtn">Update guest</button>
                    </div>)
                }


                {/*This section is not usable when using the 'window.location.reload()' */}
                {created === true ?
                    (<div className="signedUpTextContainer">
                        <h5 className="title" style={{color: 'green'}}>The guest has been created</h5>
                    </div>)
                    : (<></>)
                }

                {updated === true ?
                    (<div className="signedUpTextContainer">
                        <h5 className="title" style={{color: 'green'}}>The guest has been updated</h5>
                    </div>)
                    : (<></>)
                }

            </div>

        </div>
    );
};

export default CreateGuest;