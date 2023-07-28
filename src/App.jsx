import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import './App.css'
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/header/Header';




function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //Captura lista inteira
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegar o featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomOption = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let option = originals[0].items.results[randomOption];
      let optionInfo = await Tmdb.getMovieInfo(option.id, 'tv');
      setFeaturedData(optionInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <Header />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}

export default App
