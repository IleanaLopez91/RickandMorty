import React from 'react';
import axios from "axios";
import style from "./Detail.module.css"
import {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const closeDetail = () => {
      setCharacter({})
      navigate("/home")
     }
    
  return (
    <div className={style.fondo}>
    <div className={style.container}>
      <div className={style.imagen}>
        <img className={style.imagen} src={character.image} alt='' />
      </div>
      <div>
        <div className={style.buttonContainer}>
          <button className={style.btn} onClick={closeDetail} >X</button>
        </div>
        <div className={style.detailText}>
          <h1>{character.name}</h1>
          <h3>Status: {character.status}</h3>
          <h3>Species: {character.species}</h3>
          <h3>Origin: {character.origin?.name}</h3>
          <h3>Gender: {character.gender}</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Detail
