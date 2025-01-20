import "../css/MovieCard.css";
const MovieCard = ({ movie }) => {
  function onFavoriteClick() {
    alert("Clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.Released}</p>
      </div>
    </div>
  );
};

export default MovieCard;
