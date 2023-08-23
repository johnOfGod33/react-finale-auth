import style from "./Formulaire.module.css";
import axios from "axios";
import {useNavigate} from "react"

const Formulaire = ({setUser})=>{
    let inputNom = "";
    let inputMdp = "";
    let navigate = useNavigate();

    let onSubmit = ()=>{
        let inputUser = [{nom: inputNom, mdp: inputMdp}];
        axios.get("http://localhost:5000/users")
        .then((res)=>{
            inputUseruser.filter(()=>{
                return res.data
            })

            inputUser ? (
                setUser(inputUser)
                navigate("/")

            )
            : alert("Mot de passe ou nom d'utilisateur incorrect")
        })
        .catch((error)=>{console.log(error);})
    }

    return (
        <div>

            <section className={style.formulaire}>
                <h2>Connexion</h2>
                <form onSubmit={onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="nom">Nom:</label>
                                </td>
                                <td>
                                    <input type="text" id="nom" onInput={(e)=>{inputNom=e.target.value}} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="mdp">Mot de passe:</label>
                                </td>
                                <td>
                                    <input type="password" name="" id="mdp" onInput={(e)=>{inputNom=e.target.value}} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}> 
                                    <button>Connexion</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
        </div>
    )
}

export default Formulaire;