import pokedexLogo from "./assets/pokedexLogo.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <Link role={"link"} to="/list">
          <img src={pokedexLogo} className="pokedex" alt="pokedex" />
        </Link>

        <h1>Seja Bem-vindo(a)!</h1>
        <h2>Clique no ícone para conhecer criaturas fantásticas!</h2>
      </div>
    </div>
  );
}

export default App;
