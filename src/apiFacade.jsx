import URL from "./settings";
import jwt from 'jwt-decode'

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {


    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }
    const getRoles = () => {
        return jwt(getToken()).roles;
    }
    const getName = () => {
        return jwt(getToken()).username;
    }


    const getJokes = async() => {

        return await fetch(URL + "/api/info/jokes")
            .then(handleHttpErrors)
    }

    const getShows = async() => {

        return await fetch(URL + "/api/info/allshows")
            .then(handleHttpErrors)
    }

    const getGuests = async() => {

        return await fetch(URL + "/api/info/allguests")
            .then(handleHttpErrors)
    }

    const getFestivals = async() => {

        return await fetch(URL + "/api/info/allfestivals")
            .then(handleHttpErrors)
    }

    const getShowsByGuest = async(guestId) => {

        return await fetch(URL + "/api/info/showsbyguest/" + guestId)
            .then(handleHttpErrors)
    }

    const addGuestToShow = (guestId, showId) => {

        const options = makeOptions("POST", false,{guestId: guestId, showId: showId });

        return fetch(URL + "/api/info/addguesttoshow", options)
            .then(handleHttpErrors)
    }

    const createFestival = (name, city, startDate, duration) => {

        const options = makeOptions("POST", false,{name: name, city: city, startDate: startDate, duration: duration});

        return fetch(URL + "/api/info/createfestival", options)
            .then(handleHttpErrors)
    }

    const updateFestival = (festivalId, updatedName, updatedCity, updatedStartDate, updatedDuration) => {

        const options = makeOptions("POST", false,{festivalId: festivalId, name: updatedName, city: updatedCity,
                                                                        startDate: updatedStartDate, duration: updatedDuration});

        return fetch(URL + "/api/info/updatefestival", options)
            .then(handleHttpErrors)
    }





    const login = (user, password) => {
        const options = makeOptions("POST", true,{username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {setToken(res.token) })
    }

    const fetchData = () => {
        const options = makeOptions("GET",true); //True add's the token

        if (getRoles() === "user"){
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        } else if(getRoles() === "admin") {
            return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
        }

    }

    const makeOptions= (method,addToken,body) =>{
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }


    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        getRoles,
        getJokes,
        getName,
        getShows,
        getGuests,
        getShowsByGuest,
        addGuestToShow,
        createFestival,
        getFestivals,
        updateFestival
    }
}





const facade = apiFacade();
export default facade;
