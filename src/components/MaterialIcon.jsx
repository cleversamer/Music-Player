import styled from "styled-components";

const MaterialIcon = ({ name }) => {
  return <Container className="material-icons">{name}</Container>;
};

const Container = styled.i`
  cursor: pointer;
`;

export default MaterialIcon;
