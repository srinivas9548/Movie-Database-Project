import './index.css'

const MovieDetailsCard = props => {
  const {singleMovieDetails} = props
  const {id, posterPath} = singleMovieDetails
  console.log(singleMovieDetails)

  const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <div className="movie-details-card-container">
      <div className="movie-details-card-content">
        <div className="movie-details-and-small-img">
          <img src={imageUrl} alt={id} className="movie-small-img" />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsCard
