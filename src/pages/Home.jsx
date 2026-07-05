import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Wick", release_date: "2020" },
    { id: 2, title: "Adam", release_date: "2022" },
    { id: 3, title: "Schnell", release_date: "2024" },
    { id: 4, title: "Trump", release_date: "2026" },
    { id: 5, title: "Saini", release_date: "2028" },
  ];
  const handleSearch = () => {
    e.preventDefault();
    alert(searchQuery);
  };
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
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} /> // need to understand this line
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
