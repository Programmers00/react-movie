import { Link } from 'react-router-dom'
import styles from '../style/movie.module.css'

function Movie({ id, title, genres, img, summary }) {
  return (
    <div className={ styles.movieContainer}>
      <div className={ styles.imgContainer}>
        <Link to={`/movie/${id}`}><img className={styles.img} alt='NoImage' src={img} /></Link>
      </div>
      <div className={ styles.hiddenContainer}>
        <h4 className={styles.text}>{title}</h4>
            <span className={styles.text}>Genre: {genres.map(genre => <span key={genre}>{genre}{' '}</span>)}</span>
      </div>
    </div>
  )
}
export default Movie;