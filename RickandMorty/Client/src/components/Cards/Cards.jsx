import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) {
   return (
      <div className={style.wrapperCards}>
         {characters.map((char) => {
               return(
                  <Card 
                  id={char.id}
                  key={char.id}
                  name={char.name}
                  status={char.status}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin.name}
                  image={char.image}
                  onClose={onClose}
                  />
                  )
               }
         )}
      </div>
   );
}
