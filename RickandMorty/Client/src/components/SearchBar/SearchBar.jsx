import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch, logout, randomButton}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }
 
   return (
      <div className={style.container}>
            <input
               placeholder="Escribe un id..."
               onChange={handleChange}
               value={id} 
               type='search' 
               className={style.searchBar}
            />
            <button className={style.searchButton}onClick={() => {onSearch(id); setId("")}}>To add</button>
            <button 
               className={style.searchButton}
               onClick={randomButton}
            >Random</button>
            <button className={style.logoutButton} onClick={logout}>Log out</button>
      </div>
   );
}
