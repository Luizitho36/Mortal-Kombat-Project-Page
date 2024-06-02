import { NavLink } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import "./home.css";
import Peliculas from "../img/Home/Peliculas.jpg";
import Videojuegos from "../img/Home/Videojuegos.jpg";

function Home() {
  return (
    <div className="divContenedor">
      
      <NavLink to="/videojuegos">
          <img className="home_imagen" src={Videojuegos}></img>
      </NavLink>

      <NavLink to="/peliculas">
        <img className="home_imagen" src={Peliculas}></img>
      </NavLink>

      <Aside/>
      
    </div>
  );
}

export default Home;
