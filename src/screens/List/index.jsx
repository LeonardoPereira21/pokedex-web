import Header from "@components/Header";
import { ListContainer, ListContent, ListTitle } from "./styles";
import Card from "../../components/Card";

export function List() {
  return (
    <>
      <Header />
      <ListContainer>
      <ListTitle>Lista</ListTitle>
        <ListContent>
         
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        
        </ListContent>
      </ListContainer>
    </>
  );
}
