function Movie({title, genres, rating, img, summary}) {
    return (
    <div style={{ border: "solid 1px", padding: "10px", margin: "20px" }}>
              <h2>{title}</h2>
              <span style={{ fontWeight: "bold" }}>Genre: {genres.map(genre => <span key={genre}>{genre}{' '}</span>)}</span>
              <br />
              <span style={{ fontWeight: "bold" }}>Rating: {rating}</span>
              <br />
              <div style={{ display: "flex" }}>
                <img style={{ padding: "20px" , width: '270px', height: '385px'}} alt='NoImage' src={img} />
                <h4 style={{ padding: "20px" }}>{summary}</h4>
              </div>
        </div>
    )
}
export default Movie;