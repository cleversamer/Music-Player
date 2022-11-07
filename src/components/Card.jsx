import styled from "styled-components";
import MaterialIcon from "./MaterialIcon";
import musics from "musics";

const Card = ({ musicNum, onMusicNumChange }) => {
  const currentMusic = musics[musicNum];

  return (
    <Container>
      <Nav>
        <MaterialIcon name="expand_more" />

        <Info>
          Now Playing {musicNum + 1}/{musics.length}
        </Info>

        <MaterialIcon name="queue_music" />
      </Nav>

      <ImageContainer>
        <Image src={currentMusic.thumbnail} alt={currentMusic.title} />
      </ImageContainer>

      <Details>
        <Title>{currentMusic.title}</Title>
        <Artist>{currentMusic.artist}</Artist>
      </Details>

      <Progress>
        <ProgressRange type="range" min={0} max={100} />
      </Progress>

      <Timer>
        <Time>00:00</Time>
        <Time>03:43</Time>
      </Timer>

      <Controls>
        <MaterialIcon name="repeat" />

        <MaterialIcon id="prev" name="skip_previous" />

        <Play>
          <MaterialIcon name="play_arrow" />
        </Play>

        <MaterialIcon id="next" name="skip_next" />

        <MaterialIcon name="volume_up" />

        <Volume show={true}>
          <MaterialIcon name="volume_up" />
          <VolumeRange type="range" min={0} max={100} />
          <VolumeValue>50</VolumeValue>
        </Volume>
      </Controls>

      <Audio src={currentMusic.src} hidden />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 25px;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.span``;

const ImageContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const Details = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.2rem;
`;

const Artist = styled.p`
  color: #bbb;
`;

const Progress = styled.div`
  margin-top: 15px;
`;

const ProgressRange = styled.input`
  width: 100%;
  height: 4px;
`;

const Timer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #bbb;
`;

const Time = styled.span``;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;

  #prev,
  #next {
    font-size: 2.5rem;
  }
`;

const Play = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background: linear-gradient(#fff 0%, #cecaca 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: inherit;
    background: linear-gradient(#8dadff, #6e72a3 100%);
  }

  i {
    background-color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
  }
`;

const Volume = styled.div`
  width: 100%;
  height: 50px;
  background-color: #333;
  position: absolute;
  bottom: ${({ show }) => (show ? "0" : "-10%")};
  left: 0;
  border-radius: 10px;
  border: 1px solid #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  z-index: 5;
  transition: bottom 0.2s linear;
`;

const VolumeRange = styled.input`
  width: 100%;
  height: 4px;
`;

const VolumeValue = styled.span``;

const Audio = styled.audio``;

export default Card;
