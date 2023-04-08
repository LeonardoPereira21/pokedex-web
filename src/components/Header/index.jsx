import { HeaderContainer, HeaderContent } from "../Header/styles";
import pokedexLogo from "@/assets/PokedexLogo.png";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <a href="/">
          <img src={pokedexLogo} alt="Pokedex Logo" width={150} />
        </a>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
