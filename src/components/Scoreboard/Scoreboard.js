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
  background-color: black;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Score = styled.div`
  font-weight: 700;
  font-size: 32px;
  padding: 1rem;
  border-radius: 20px;
`;

const CurrScore = styled(Score)`
  background: red;
  margin-right: 2rem;
`;

const BestScore = styled(Score)`
  background: green;
  margin-left: 2rem;
`;

export default Scoreboard;