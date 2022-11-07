import { useState } from "react";
import styled from "styled-components";
import Card from "components/Card";

const Home = () => {
  const [musicNum, setMusicNum] = useState(0);

  return (
    <Container>
      <Shape1></Shape1>
      <Shape2></Shape2>
      <Shape3></Shape3>

      <Content>
        <Card
          musicNum={musicNum}
          onMusicNumChange={(musicNum) => setMusicNum(musicNum)}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
  border-radius: 15px;
  position: relative;
`;

const Content = styled.main`
  width: 360px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(7, 15, 15, 0.5);
  overflow: hidden;
  backdrop-filter: blur(3px);
`;

const Shape = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50px;
`;

const Shape1 = styled(Shape)`
  background: radial-gradient(circle at 35px 65px, #9b22ea, #005);
  left: -65px;
  top: -65px;
`;

const Shape2 = styled(Shape)`
  background: radial-gradient(circle at 45px 90px, #ea22b1, #111);
  right: -65px;
  bottom: -65px;
`;

const Shape3 = styled(Shape)`
  width: 60px;
  height: 60px;
  background-color: #08e2ff;
  right: 7px;
  top: 10px;
  filter: blur(20px);
`;

export default Home;
