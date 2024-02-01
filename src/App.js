import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import MovieInfo from "./components/movieInfo/MovieInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieInfo></MovieInfo>} />
          <Route
            path="movies/:type"
            element={<MovieList movieCollectionType="popular"></MovieList>}
          />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
