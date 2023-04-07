import { forwardRef } from "react";
import {
  CardContainer,
  CardContent,
  Checkbox,
  PokemonName,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/pokemon/slice";

const Card = forwardRef(({ name, order }, ref) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.pokemon);
  
  return (
    <CardContainer ref={ref}>
      <CardContent>
        <img
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
          alt={name}
          width={200}
          height={200}
        />
        <PokemonName>{name}</PokemonName>
        <Checkbox
          checked={favorites.find((item) => item === name)}
          value={favorites.find((item) => item === name)}
          onChange={() => dispatch(setFavorites(name))}
        />
      </CardContent>
    </CardContainer>
  );
});

export default Card;
