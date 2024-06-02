import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Header from './layout/Header/Header';
import Nav from "./layout/Nav/Nav";
import Search from "./layout/Search/Search";
import Home from "./pages/Home";
import Footer from "./layout/Footer/Footer";
import NotFound from "./pages/NotFound";
import { StorePage } from "./pages/Store/indexStore";
import { Carrito } from "./pages/Store/Carrito";
import Gracias_Por_Comprar from "./pages/Store/Gracias_Por_Comprar";
import juegoPage from "./data/videogames.json";
import Videojuegos from "./pages/Videojuegos/Videojuegos";
import VideojuegosPage from "./pages/Videojuegos/VideojuegosPage";
import peliculaPage from "./data/movies.json";
import Peliculas from "./pages/Peliculas/Peliculas";
import PeliculasPage from "./pages/Peliculas/peliculasPage";
import MK_1995_Ver from "./pages/Peliculas/MK_1995_Ver";
import Videos from "./layout/Videos/Videos";
import "./App.css";

function App() {
  const store = useSelector((store) => store);
  return (
    <Router>
      <div className="App">

        <Header />
        <Nav />
        <Search />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/Store" element={<StorePage />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/peliculas/:pagina"
            element={
              <PeliculasPage
                key={peliculaPage.key}
                imgUrl={peliculaPage.imgUrl}
                title={peliculaPage.title}
                argumento={peliculaPage.argumento}
                argumento2={peliculaPage.argumento2}
              />
            }
          />
          <Route
            path="/peliculas/MK_1995/MK_1995_Ver"
            element={<MK_1995_Ver />}
          />

          <Route path="/Store/carrito" element={<Carrito />} />
          <Route
            path="/Store/carrito/gracias"
            element={<Gracias_Por_Comprar />}
          />

          <Route
            path="/videojuegos/:pagina"
            element={
              <VideojuegosPage
                key={juegoPage.key}
                imgUrl={juegoPage.imgUrl}
                title={juegoPage.title}
                argumento={juegoPage.argumento}
                argumento2={juegoPage.argumento2}
              />
            }
          />
        </Routes>

        <Videos />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
