import React, {useEffect, useState} from 'react';
import "../guestsShows.css";
import apiFacade from "../apiFacade";

const ShowsByGuest = () => {

    const [guestList, setGuestList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [selected, setSelected] = useState("");
    const [fetcher, setFetcher] = useState(false);


    useEffect(() => {
        const fetch = async() => {
            const guests = await apiFacade.getGuests();

            setGuestList(guests);
        }

        fetch();

    },[])


    useEffect(() => {
        const fetch = async() => {
            if(selected !== ""){
                const shows = await apiFacade.getShowsByGuest(selected);

                setShowList(shows);
            }
        }

        fetch();

        console.log(showList);

    },[fetcher])



    const clickHandler = (event) => {
        setSelected(event.target.value);
    }

    const btnHandler = () => {
        setFetcher(!fetcher);
    }

    return (
        <div>
            <h1 className="title">Guests shows</h1>

            <div className="dropdownContainer">

                <div className="dropdown">
                    <select onClick={clickHandler} name="guests" id="guests">

                        <option selected="true" disabled="disabled" value="">Choose a guest:</option>

                        {guestList.map((guest, index) => {
                            return(
                                <option key={index} value={guest.id}>{guest.name}</option>
                            )
                        })}

                    </select>

                    <br/>

                    <button onClick={btnHandler} className="btn btn-secondary">Get boats</button>

                </div>

            </div>

            <br/>
            <br/>

            <div className="table-container">
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Location</th>
                        <th scope="col">Start date</th>
                        <th scope="col">Start time</th>
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

export default ShowsByGuest;