import React from 'react';
import apiFacade from "../apiFacade";

const Welcome = props => {


    return (
        <div>
            <h1 className="title"><img style={{width: 50}} src="/src/favicon.png"/>Welcome page<img style={{width: 50}} src="/src/favicon.png"/></h1>
            {apiFacade.getRoles() === "admin" ?
                (<div className="text-center">
                    <p style={{fontSize: 25, fontWeight: 900}}>As an admin you have these opportunities:</p>
                    <br/>
                    <p style={{fontSize: 25}}>1. Create and update festivals</p>
                    <p style={{fontSize: 25}}>2. Create and update shows</p>
                    <p style={{fontSize: 25}}>3. Create and update guest accounts</p>
                    <p style={{fontSize: 25}}>4. Delete shows</p>
                </div>):
                (<div className="text-center">
                    <p style={{fontSize: 25, fontWeight: 900}}>As a user you have these opportunities:</p>
                    <br/>
                    <p style={{fontSize: 25}}>1. See all shows available</p>
                    <p style={{fontSize: 25}}>2. See all the shows a specific guest is assigned to</p>
                    <p style={{fontSize: 25}}>3. Sign a specific user up to a specific show</p>
                </div>)}

        </div>
    );
};


export default Welcome;