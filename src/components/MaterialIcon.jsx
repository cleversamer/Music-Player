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
`;

export default MaterialIcon;
