import { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlist from "./Components/Pages/Playlist/Playlist";
import Header from "./Components/Pages/Header/Header";
import Formulaire from "./Components/Formulaire/Formulaire";

const App = () =>{
    let [user, setUser] = useState([]);
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Header user={user}/>}/>
            <Route path="/formulaire" element= {<Formulaire setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
   )
}

export default App;