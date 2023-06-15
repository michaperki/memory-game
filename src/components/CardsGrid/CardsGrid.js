import Card from "./Card";
import styled from "styled-components";

const CardsGrid = ({ characters, handleCardClick }) => {
  const cards = characters.map((character) => (
    <Card key={character.id} character={character} handleCardClick={handleCardClick} />
  ));

  return <CardsGridWrapper>{cards}</CardsGridWrapper>
};

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

export default CardsGrid;