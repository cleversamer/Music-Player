import { useState } from "react";
import styled from "styled-components";
import Card from "components/Card";

const Home = () => {
  const [musicNum, setMusicNum] = useState(0);

  return (
    <Container>
      <Content>
        <Card
          musicNum={musicNum}
          onMusicNumChange={(musicNum) => setMusicNum(musicNum)}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.main`
  width: 360px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(7, 15, 15, 0.5);
  overflow: hidden;
  backdrop-filter: blur(3px);
`;

export default Home;
