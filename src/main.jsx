import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./joke.css";
import App from "./App";
import Welcome from "./routes/welcome";
import UserPage from "./routes/userPage";
import AdminPage from "./routes/adminPage";
import ApiFacade from "./apiFacade";
import AllShows from "./routes/allShows";
import ShowsByGuest from "./routes/showsByGuest";
import SignUp from "./routes/signUp";
import CreateFestival from "./routes/createFestival";
import DeleteShow from "./routes/deleteShow";
import CreateShow from "./routes/createShow";
import CreateGuest from "./routes/createGuest";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/userpage" element={<UserPage/>}/>
                <Route path="/adminpage" element={<AdminPage/>}/>
                <Route path="/allshows" element={<AllShows/>}/>
                <Route path="/guestsshows" element={<ShowsByGuest/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/createfestival" element={<CreateFestival/>}/>
                <Route path="/createshow" element={<CreateShow/>}/>
                <Route path="/createguest" element={<CreateGuest/>}/>
                <Route path="/deleteshow" element={<DeleteShow/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);