import styled from "styled-components";

export const ListContainer = styled.div`
  background: ${(props) => props.theme["white"]};
  padding: 1rem;
  width: 85%;
  margin: 60px auto;
  border-radius: 10px;
`;

export const ListContent = styled.div`
  display: flex;
`;

export const ListTitle = styled.h1`
  text-align: center;
`;
