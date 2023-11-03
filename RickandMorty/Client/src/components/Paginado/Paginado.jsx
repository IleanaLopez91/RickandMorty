import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import style from "./Paginado.module.css"

function RickAndMortyPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (pageNumber) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
      const { results, info } = response.data;
      console.log(info)
      setCharacters(results);
      setInfo(info);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < info.pages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
        <div className={style.wrapperContainer}>
            <div className={style.name}>
                <h1>Rick and Morty Characters</h1>
            </div>
            <div>
                <button className={style.pageButton} onClick={handlePreviousPage} disabled={page === 1} >
                    Previous
                </button>
                <input className={style.searchInput} placeholder="Page"></input>
                <button className={style.pageButton} onClick={handleNextPage} disabled={page === info.pages}>
                    Next
                </button>
            </div>
        </div>
        
        <div className={style.wrapperCards}>
            {characters.map((char) =>{
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
                    />
                )}
            )}
        </div>
      
    </div>
  );
}

export default RickAndMortyPage;
