import styled from "styled-components";

const MaterialIcon = ({ id = "", name = "" }) => {
  return (
    <Container id={id} className="material-icons">
      {name}
    </Container>
  );
};

const Container = styled.i`
  cursor: pointer;
  transition-duration: 176ms;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.97);
  }
`;

export default MaterialIcon;
