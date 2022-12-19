import { useEffect, useState } from "react"
import Movie from "../components/Movie"

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
        <h1>Loading...</h1> :
        <div>
          {movies.map(movie =>
            <Movie key={movie.id } title={movie.title_long} genres={movie.genres} rating={movie.rating} img={movie.medium_cover_image} summary={movie.summary} />)}
          </div>
      }
    </div>
  );
}

export default Home;