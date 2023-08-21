import { AppContext } from "../../Context/AppContext";
import Propop from "../../Layout/Propop";

const Cours = ({extrait})=>{
    return(
        <div>
            <h1>Cours</h1>
            <AppContext.Provider value={{extrait}}>
                <Propop/>
            </AppContext.Provider>
        </div>
    )
}

export default Cours;