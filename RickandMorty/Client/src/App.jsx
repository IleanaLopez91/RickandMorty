//import style from './App.module.css';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {cleanAll, removeFav} from "./redux/actionsCreators"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import About from "./components/About/about.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Paginado from "./components/Paginado/Paginado.jsx";
const EMAIL = "ile@mail.com";
const PASSWORD = "123456"


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch()
   
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const myFavorites = useSelector(state => state.myFavorites);

   //useEffect(() => {
     // !access && navigate("/")
   //}, [access])

   const onSearch = async (id) => {
      //todo lo que sigue desp del + lo convierte en numero : unary operator
      const find = characters.find((char) => char.id === +id);
      if(find) return window.alert("Este personaje ya fue agregado");
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if(data){
            setCharacters((oldCharacters) => [...oldCharacters, data]);
         }
         
      } catch (error) {
         window.alert("No hay personajes con ese nombre!")
      }
   }

   const onClose = (id) => {
      const charactersFilteres = characters.filter((char) =>
         char.id !== Number(id)
      )
      setCharacters(charactersFilteres);
      dispatch(removeFav(id))
   }

   const randomButton = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId)
   }

   async function login (userData){
      /*const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });*/
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const {data} = await axios(URL + `?email=${email}&password=${password}`);
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         window.alert("Datos incorrectos!")
      }
   }

   const logout = () => {
      setAccess(false)
      setCharacters([])
      navigate("/")
   }

   const clearButton = () => {
      setCharacters([]);
      dispatch(cleanAll());
      navigate("/home");
   }

   return (
      <div>
         {location.pathname !== "/" && <Nav 
            onSearch={onSearch}
            randomButton={randomButton}
            clearButton={clearButton}
            logout={logout}
         />}
         <Routes>
            <Route 
               path="/"
               element = {<Form 
                  login={login}
               />}
            />
            <Route 
               path="/paginado"
               element={<Paginado />}
            />
            <Route 
               path="/home" 
               element={<Cards 
                  characters={characters} 
                  onClose={onClose}/>
               }
            />
            <Route 
               path="/about"
               element={<About />}
            />
            <Route 
               path="/detail/:id"
               element={<Detail />}
            />

            <Route 
               path="/favorites" 
               element={<Favorites
               />} 
            /> 

            <Route 
               path="*" 
               element={<Error404 />} 
            /> 
           
         </Routes>
      </div>
   );
}

export default App;