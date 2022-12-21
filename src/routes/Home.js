import { useEffect, useState } from "react"
import Movie from "../components/Movie"
import Loading from "../components/Loading"
import styles from '../style/home.module.css'

function Home() {
  /** datas */
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  /** function */
  // get movie api data
  const getMovies = async () => {
    const moviesJson = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    ).json()
    setMovies(moviesJson.data.movies)
    setLoading(false)
  }
  /** useEffect */
  useEffect(() => { getMovies() }, [])
  return (
    <div>
      {loading ?
        <Loading/> :
        <div className={ styles.moviesContainer }>
          {movies.map(movie =>
            <Movie key={movie.id} id={movie.id} title={movie.title_long} genres={movie.genres} rating={movie.rating} img={movie.medium_cover_image} summary={movie.summary} />)}
          </div>
      }
    </div>
  );
}

export default Home;