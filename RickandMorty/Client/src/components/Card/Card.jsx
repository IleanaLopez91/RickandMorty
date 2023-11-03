import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actionsCreators";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"


 function Card(props) {
   const {onClose, name, status, species, gender, origin, image, id, addFav, removeFav, myFavorites} = props
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
     
   return (
      <div className={style.cardContainer}>
         <div className={style.header}>
            <div className={style.wreapperButton}>
               
                  {
                     isFav ? (
                        <button onClick={handleFavorite} className={style.btn}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite} className={style.btn}>🤍</button>
                     )  
                  }
               
             
                  <button className={style.btn} onClick={()=>{onClose(props.id)} }>X</button>
               
            </div>
            <img src={image} className={style.imagen}alt='' />  
         </div>
         <div className={style.wrapperText}>
            <div className={style.name}>
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
            </div>
         </div>
         <div className={style.anotherText}>
            <h2>{status}</h2>
            <h2>{species}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav : (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)