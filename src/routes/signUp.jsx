import React, {useEffect, useState} from 'react';
import apiFacade from "../apiFacade";
import ApiFacade from "../apiFacade";
import {Link} from "react-router-dom";

const SignUp = () => {

    const [showList, setShowList] = useState([]);
    const [selectedShow, setSelectedShow] = useState("");

    const [guestList, setGuestList] = useState([]);
    const [selectedGuest, setSelectedGuest] = useState("");

    const[signedUp, setSigndUp] = useState(false);


    useEffect(() => {
        const fetchShows = async() => {
            const shows = await apiFacade.getShows();

            setShowList(shows);
        }

        const fetchGuests = async() => {
            const guests = await apiFacade.getGuests();

            setGuestList(guests);
        }

        fetchShows();
        fetchGuests();

    }, [])



    const clickHandler = (event) => {
        if(event.target.name === "guests"){
            setSelectedGuest(event.target.value);
        } else if (event.target.name === "shows") {
            setSelectedShow(event.target.value);
        }
    }


    const btnHandler = () => {
        connect();
    }


    const connect = () => {
        if(selectedGuest !== "" && selectedShow !== ""){
            apiFacade.addGuestToShow(selectedGuest,selectedShow);

            setSigndUp(true);
        }
    }




    return (
        <div>
            <h1 className="title">Sign up to show</h1>

            <div className="backBtnContainer">
                <Link to="/userpage">
                    <button className="btn btn-danger">Go back</button>
                </Link>
            </div>

            <div className="dropdownContainer">

                <div className="dropdown">
                    <select onClick={clickHandler} name="guests" id="guests">

                        <option selected="true" disabled="disabled">Choose a guest:</option>

                        {guestList.map((guest, index) => {
                            return(
                                <option key={index} value={guest.id}>{guest.name}</option>
                            )
                        })}

                    </select>
                </div>

                <div className="dropdown">
                    <select onClick={clickHandler} name="shows" id="shows">

                        <option selected="true" disabled="disabled">Choose a show:</option>

                        {showList.map((show, index) => {
                            return(
                                <option key={index} value={show.id}>{show.name}</option>
                            )
                        })}

                    </select>
                </div>

            </div>

            <div className="connectBtnContainer">
                <button onClick={btnHandler} className="btn btn-success">Connect</button>
            </div>


            {signedUp === true ?
                (<div className="signedUpTextContainer">
                    <h5 className="title" style={{color: 'green'}}>The guest has been signed up</h5>
                </div>)
                :
                (<></>)
            }


        </div>
    );
};

export default SignUp;