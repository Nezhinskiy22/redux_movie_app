import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import MovieDetail from "./components/MovieDetails/MovieDetails.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="/404" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
