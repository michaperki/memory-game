import styled from "styled-components";

const Card = ({ character, handleClick }) => {
  return (
    <CardWrapper onClick={handleClick}>
      <Image src={character.image} alt={character.name} />
      <Name>{character.name}</Name>
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
  border-radius: 20px;
  box-shadow: 0px 5px 15px white;
  transition: transform 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  padding: 0.5rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Name = styled.p`
  padding: 0.5rem;
  text-align: center;
  font-weight: 700;
`;

export default Card;
