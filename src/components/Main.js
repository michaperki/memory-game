import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import { getCharacter } from "rickmortyapi";
import CardsGrid from "./CardsGrid";
import { shuffleArray } from "../utils";

const Main = () => {
  const CHARACTER_COUNT = 12;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      setCharacters(shuffleArray(await fetchCharacters(CHARACTER_COUNT)));
    };

    loadCards();
  }, []);

  const fetchCharacters = async (count) => {
    const characters = [];

    for (let i = 1; i <= count; i++) {
      const character = await getCharacter(i);
      const { name, image, id } = character.data;
      characters.push({ name, image, id });
    }

    return characters;
  };

  return (
    <MainWrapper>
      <CardsGrid characters={characters} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  height: 90vh;
  background-image: url(${background});
  background-size: cover;
`;

export default Main;
