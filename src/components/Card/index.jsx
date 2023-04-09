import { forwardRef } from "react";
import {
  CardContainer,
  CardContent,
  Checkbox,
  PokemonName,
  Favorite,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/pokemon/slice";

const Card = forwardRef(({ name }, ref) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.pokemon);
  const isChecked =
    favorites &&
    favorites.length > 0 &&
    favorites.find((item) => item === name);
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
        <Favorite>
          Favorito?
          <Checkbox
            checked={isChecked}
            value={isChecked}
            onChange={() => dispatch(setFavorites(name))}
          />
        </Favorite>
      </CardContent>
    </CardContainer>
  );
});

export default Card;
