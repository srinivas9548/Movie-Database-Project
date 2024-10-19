import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, posterPath, title, voteAverage} = movieDetails
  //   console.log(movieDetails)

  const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <li className="movie-card-item">
      <img src={imageUrl} alt={id} className="movie-image" />
      <p className="movie-title">{title}</p>
      <p className="movie-rating">Rating: {voteAverage.toFixed(1)}</p>
    </li>
  )
}

export default MovieCard
