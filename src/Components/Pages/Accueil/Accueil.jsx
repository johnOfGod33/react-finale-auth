import { useRef, useEffect } from "react";
const Accueil = ()=>{
    let myLoremDiv = useRef(null);
    useEffect(()=>{ //s'execute apres que le composant soit monté
        console.log("UseEffect");
        myLoremDiv.current.style.color = "red"
    })

    return (
        <div>
            <h3>Accueil</h3>
            <div ref={myLoremDiv}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque laboriosam magni! Suscipit inventore ullam sequi soluta perferendis, blanditiis officiis deleniti deserunt commodi! Amet quod dolores, laudantium, veniam hic sint sunt, voluptatum eaque tempore iste non ipsam! Cumque assumenda harum, vel modi sit praesentium ipsam ullam numquam aut architecto et iure voluptatibus ad illo corporis, veniam amet, officia debitis. Animi at tempora modi distinctio in ullam, dolorem nulla obcaecati tempore minus, cupiditate magnam. Reprehenderit, accusantium? Dolorum atque nostrum ex qui voluptatum beatae, unde debitis voluptate. Voluptate delectus earum labore, iusto dolore totam veritatis velit aut quas rerum, hic sed praesentium.
            </div>
        </div>
    )
}

export default Accueil;