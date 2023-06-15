import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import { getCharacter } from "rickmortyapi";
import CardsGrid from "./CardsGrid";
import { generateArrayOfRandomNumbers, shuffleArray } from "../utils";
import Scoreboard from "./Scoreboard";

const Main = () => {
  const CHARACTER_COUNT = 12;
  const TOTAL_API_CHARACTERS = 826;
  const RANDOM_SELECTION = generateArrayOfRandomNumbers(CHARACTER_COUNT, TOTAL_API_CHARACTERS);
  const [randomNumArray, setRandomNumArray] = useState(RANDOM_SELECTION)
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setCharacters(shuffleArray(await fetchCharacters(CHARACTER_COUNT)));
    };

    loadCards();
  }, []);

  const fetchCharacters = async (count) => {
    const characters = [];

    for (let i = 0; i < count; i++) {
      const character = await getCharacter(randomNumArray[i]);
      const { name, image, id } = character.data;
      characters.push({ name, image, id });
    }

    return characters;
  };

  const handleCardClick = (e) => {
    const character = e.target.parentNode.lastChild.innerText;
    if (clickedCharacters.includes(character)) {
      resetGame();
    } else {
      playRound(character);
    }
  };

  const playRound = (clickedCharacter) => {
    const newScore = currentScore + 1;
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setCurrentScore(newScore);
    setClickedCharacters((prevState) => [...prevState, clickedCharacter]);
    setCharacters(shuffleArray(characters));
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCharacters([]);
  };

  return (
    <MainWrapper>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid characters={characters} handleCardClick={handleCardClick} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  height: 90vh;
  background-image: url(${background});
  background-size: cover;
`;

export default Main;
