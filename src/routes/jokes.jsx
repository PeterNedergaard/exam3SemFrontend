import React, {useEffect, useState} from 'react';
import URL from "../settings";
import ApiFacade from "../apiFacade";
import "../joke.css"

const Jokes = props => {

    const [joke1, setJoke1] = useState();
    const [joke2, setJoke2] = useState();
    const [clicked, setClicked] = useState(false);

    useEffect( () => {

        const fetchJokes = async() => {
            const jokes = await ApiFacade.getJokes();

            setJoke1(jokes[0])
            // console.log(joke1)
            setJoke2(jokes[1])
        }
        fetchJokes();

        console.log(joke1)
        console.log(joke2)

    }, [clicked])


    const click = () => {
        setClicked(!clicked)
    }


    return (
        <div>
            <h1 className="title">Joke page</h1>

            <div className="table-container">
                <table className="table table-light table-striped table-style">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Joke</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{joke1}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{joke2}</td>
                    </tr>
                    </tbody>
                </table>

            </div>

            <div className="button-container">
                <button className="btn btn-primary" onClick={click}>Get jokes</button>
            </div>


        </div>
    );
};


export default Jokes;