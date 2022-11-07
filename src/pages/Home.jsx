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

const Content = styled.main``;

export default Home;
