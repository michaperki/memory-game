import styled from "styled-components";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <ScoreboardWrapper>
      <CurrScore>score: {currentScore}</CurrScore>
      <BestScore>best score: {bestScore}</BestScore>
    </ScoreboardWrapper>
  );
};

const ScoreboardWrapper = styled.div`
  display: flex;
  background-color: #b7e4f9ff;
  justify-content: space-between;
  width: 300px;
  padding: 1em;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 5px 15px white;
`;

const Score = styled.div`
  font-weight: 500;
  font-size: 32px;
`;

const CurrScore = styled(Score)`
  color: red;
`;

const BestScore = styled(Score)`
  color: green;
`;

export default Scoreboard;