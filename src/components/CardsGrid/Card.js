import styled from "styled-components";

const Card = ({ character, handleClick }) => {
  return (
    <CardWrapper onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  color: black;
  background: lightgrey;
  padding: 5px;
  :hover {
    transform: scale(1.05);
  }
`;

export default Card;
