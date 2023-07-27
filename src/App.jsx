import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import './App.css'




function App() {

  const [movieList, setMovieList] = useState ([]);

  useEffect(() => {
    const loadAll = async () => {
      //Captura lista inteira
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);
 
  return (
   <div className='page'>
    Header
    Destaque
    Listas
    Rodape
   </div>
  )
}

export default App
