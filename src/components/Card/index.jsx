import {
  CardContainer,
  CardContent,
  PokemonName,
  PokemonNumber,
} from "./styles";
import gengar from "@/assets/gengar.png";

function Card() {
  return (
    <CardContainer>
      <CardContent>
        <img src={gengar} alt="" width={150} />
        <PokemonName>Gengar</PokemonName>
        <PokemonNumber>#0094</PokemonNumber>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
