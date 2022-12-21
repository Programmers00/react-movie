import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading"
import styles from '../style/detail.module.css'

function Detail() {
  /** params from router */
  const { id } = useParams()
  /** datas */
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [genres, setGenres] = useState([])
  const [rating, setRating] = useState('')
  const [runtime, setRuntime] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  const getMovie = async () => {
      const movieJson = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
      const movie = movieJson.data.movie
      setTitle(movie.title)
      setGenres(movie.genres)
      setRating(movie.rating)
      setRuntime(movie.runtime)
      setImg(movie.large_cover_image)
      setDescription(movie.description_full)
      setLoading(false)
    }
    useEffect(() => { getMovie() },[])
  return (
    <div>
      {loading ?
        <Loading/> :
        <div className={styles.detailContainer}>
          <img className={styles.img} alt='NoImage' src={img} />
          <div className={styles.textContainer} >
            <h2>{title}</h2>
            <span >Genre: {genres.map(genre => <span key={genre}>{genre}{' '}</span>)}</span>
            <br />
            <span >Rating: {rating}</span>
            <br />
            <span >Runtime: {runtime}</span>
            <br />
            <div >
              <h4 >{description}</h4>
            </div>
          </div>
        </div>
      }
      </div>
    )
}
export default Detail;