import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const Propop = () =>{
    let {extrait} = useContext(AppContext)
    return(
        <div>
            {extrait}
        </div>
    )
}

export default Propop;