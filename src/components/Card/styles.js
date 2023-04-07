import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${(props) => props.theme["light-gray"]};
  padding: 1rem;
  width: 20%;
  border: 2px solid ${(props) => props.theme["light-gray"]};
  border-radius: 3px;
  margin: 20px;
`;

export const CardContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PokemonName = styled.span`
  margin-top: 20px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })``;
