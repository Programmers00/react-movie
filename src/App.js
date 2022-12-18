import {useEffect, useState} from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const moviesJson = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    ).json()
    setMovies(moviesJson.data.movies)
    setLoading(false)
    console.log(moviesJson.data.movies)
  }
  

  useEffect(() => { getMovies() }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : movies.map(movie =>
        <div style={{ border: "solid 1px", padding: "10px", margin: "20px" }} key={movie.id}>
          <h2>{movie.title_long}</h2>
          <span style={{ fontWeight: "bold"}}>Genre: {movie.genres.map(genre => <span key={genre}>{genre}{' '}</span>)}</span>
          <br/>
          <span style={{ fontWeight: "bold"}}>Rating: {movie.rating}</span>
          <br />
          <div style={{display: "flex"}}>
            <img style={{padding: "20px"}} alt='NoImage' src={movie.medium_cover_image}/>
            <h4 style={{padding: "20px"}}>{movie.summary}</h4>
          </div>
      </div>)}
    </div>
  );
}
export default App;
