import pokedexLogo from "@/assets/PokedexLogo.png";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <a href="/list">
          <img src={pokedexLogo} className="pokedex" alt="pokedex" />
        </a>

        <h1>Seja Bem-vindo(a)!</h1>
        <h2>Clique no ícone para conhecer criaturas fantásticas!</h2>
      </div>
    </div>
  );
}

export default App;
