import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actionsCreators';
import style from "./Favorites.module.css"

const Favorites = () => {

  const [aux, setAux] = useState(false)
  
  const myFavorites = useSelector(state => state.myFavorites);

  const dispatch = useDispatch();

  const handlerOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value))
  }

  return (
    <div>
      <div className={style.filter}>
        <select onChange={handlerOrder} className={style.filterButton}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter} className={style.filterButton}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.wrapperCards}>
      {myFavorites.length && 
      myFavorites.map((fav) =>{
        return(
          <Card 
          id={fav.id}
          key={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin.name}
          image={fav.image}
          />
        )}
      )}
      </div>
    </div>
  )
}

export default Favorites
