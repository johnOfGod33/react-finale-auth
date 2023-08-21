import { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlist from "./Components/Pages/Playlist/Playlist";
import Header from "./Components/Pages/Header/Header";


const App = () =>{
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Header/>}/>
            <Route path="/playlist" element= {<Playlist/>}/>
        </Routes>
    </BrowserRouter>
   )
}

export default App;