import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getMovies } from "../services/api";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("movies", movies);
  // const movies = [
  //   { id: 1, title: "John Wick", release_date: "2020" },
  //   { id: 2, title: "Terminator", release_date: "1999" },
  //   { id: 3, title: "The Matrix", release_date: "1998" },
  // ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const getMoviess = await getMovies();
        setMovies(getMoviess);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          <MovieCard movie={movies} />
        </div>
      )}
    </div>
  );
};

export default Home;
