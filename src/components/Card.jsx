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
        <Range type="range" min={0} max={100} />
      </Progress>

      <Timer>
        <Time>00:00</Time>
        <Time>03:43</Time>
      </Timer>

      <Controls>
        <MaterialIcon name="repeat" />

        <MaterialIcon name="skip_previous" />

        <Play>
          <MaterialIcon name="play_arrow" />
        </Play>

        <MaterialIcon name="skip_next" />

        <MaterialIcon name="volume_up" />
      </Controls>

      <Audio src={currentMusic.src} hidden />
    </Container>
  );
};

const Container = styled.div``;

const Nav = styled.div``;

const Info = styled.span``;

const ImageContainer = styled.div``;

const Image = styled.img``;

const Details = styled.div``;

const Title = styled.p``;

const Artist = styled.p``;

const Progress = styled.div``;

const Range = styled.input``;

const Timer = styled.div``;

const Time = styled.span``;

const Controls = styled.div``;

const Play = styled.div``;

const Audio = styled.audio``;

export default Card;
