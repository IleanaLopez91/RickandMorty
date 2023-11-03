import React from 'react';
import {Link} from "react-router-dom"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"

const Nav = ({onSearch, randomButton, clearButton, logout}) => {

  return (
    <div className={style.container}>
      <div >
        <Link to="/about">
          <button
            className={style.btn}
          >About</button>
        </Link>
        <Link to="/home">
          <button
            className={style.btn}
          >Home</button>
        </Link>
        <Link to="/favorites">
          <button
          className={style.btn}
          >Favorites
          </button>
        </Link>
        <button className={style.btn} onClick={clearButton} >Clean all</button>
        <Link to="/paginado">
          <button
            className={style.btn}
          >All </button>
        </Link>
      </div>
      <div className={style.searchBar}>
        <SearchBar onSearch={onSearch} logout={logout} randomButton={randomButton}/>
      </div>
    </div>
  )
}

export default Nav
