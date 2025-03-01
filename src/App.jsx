import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import Poster from "./pages/Poster";
import SearchResult from "./pages/Search";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/:name" element={<Poster />} />
        <Route path="/:serial" element={<Poster />} />
        <Route path="/:movie" element={<Poster />} />
        <Route path="/search/:movie" element={<SearchResult />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;