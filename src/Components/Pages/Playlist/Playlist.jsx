import { useEffect, useState } from "react";
import Header from "../Header/Header";
import style from "./Playlist.module.css"
import axios from "axios";
const Playlist = () =>{
   /*  let musiqueList = [
        {artiste:"Yeat", titre:"Flawless"},
        {artiste:"Glish", titre:"Nous 2"},
        {artiste:"Travis Scott", titre:"FE!N"}
    ] */
    let [musiqueList, setMusiqueList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/musics")
        .then((res)=>{
            setMusiqueList(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    })

    let showMusiqueList =  musiqueList.map((musique, indice)=>{
        return(
        <section key={indice}>
            <article className={style.playlist__Icon}></article>
            <aside>
                {musique.artiste} - {musique.titre}
            </aside>
        </section>
        )
    })
    return(
        <div>
            <Header/>
            <section className={style.playlist}>
                {
                   musiqueList && showMusiqueList
                }
            </section>
        </div>
    )
}

export default Playlist;