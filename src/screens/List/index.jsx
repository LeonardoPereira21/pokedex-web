import { Header, Card } from "@components";
import { ListContainer, ListContent, ListTitle } from "./styles";
import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { setData, setNext } from "@/redux/pokemon/slice";

export function List() {
  const dispatch = useDispatch();
  const ref = useRef();
  const [loading, setLoading] = useState(false);
  const { data, next } = useSelector((store) => store.pokemon);

  const fetchList = async () => {
    setLoading(true);
    const response = await api.get(`v2/pokemon/${next || ""}`);
    dispatch(setData(response.data.results));
    dispatch(setNext(response.data.next.match(/\?(.*)/)[0]));
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", inViewPort, false);
    return () => window.removeEventListener("scroll", inViewPort);
  }, [loading]);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    fetchList();
  }, []);

  const inViewPort = () => {
    if (ref.current && !loading) {
      const { top } = ref.current.getBoundingClientRect();
      if (top - 586.25 <= 0) {
        fetchList();
      }
    }
  };

  return (
    <>
      <Header />
      <ListContainer>
        <ListTitle>Lista</ListTitle>
        <ListContent>
          {data.map((pokemon, index) => (
            <Card
              name={pokemon.name}
              order={pokemon.order}
              {...(index === data.length - 1 ? { ref } : {})}
            />
          ))}
        </ListContent>
      </ListContainer>
    </>
  );
}
