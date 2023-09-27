import Charts from "./components/Charts/Charts";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 50px;
  grid-column-gap: 20px;

  @media screen and (min-width: 743px) {
    margin: 20px calc(10% + 100px);
  }
`;

export default function Crypto() {
  return (
    <Wrapper>
      <Nav />
      <Header />
      <Charts />
    </Wrapper>
  );
}
