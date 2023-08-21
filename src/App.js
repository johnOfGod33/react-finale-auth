import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Components/Pages/Accueil/Accueil";
import Cours from "./Components/Pages/Cours/Cours";
const App = () =>{
    let [extrait, setExtrait] = useState("yo yo yo")
   return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Cours/>} />
        </Routes>
    </BrowserRouter>
   )
}

export default App;