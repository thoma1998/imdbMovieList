import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./Container/MovieDetail";
import Home from "./Container/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* home */}
        <Route path="/imdbMovieList" element={<Home />} /> 
        {/* movie detail page */}
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
