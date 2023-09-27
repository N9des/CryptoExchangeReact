import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Container = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
`;

const Title = styled.h2`
  font-size: 3.8125em;
  font-weight: normal;
`;

const Subtitle = styled.h3`
  font-size: 1.7em;
  font-weight: 300;
`;

const Wallet = styled.div`
  max-height: 160px;
  padding: 25px;
  margin-top: 40px;
  border-radius: 6px;

  background: linear-gradient(
    132.28deg,
    rgba(189, 195, 199, 0.5) 12.13%,
    rgba(44, 62, 80, 0.5) 83.08%
  );
  box-shadow: 4px 4px 10px rgba(44, 62, 80, 0.3);

  .title-wallet {
    text-align: center;

    font-weight: 275;
    font-size: 1.7em;
    color: var(--white);
  }

  .price {
    text-align: center;
    font-size: 2.938em;
    color: var(--white);
  }
`;

export default function Header({ search, setSearch }) {
  return (
    <Container>
      <Title>Hello, John</Title>
      <Subtitle>Welcome back !</Subtitle>
      <Wallet>
        <p className="title-wallet">My wallet</p>
        <p className="price">$16,456</p>
      </Wallet>
    </Container>
  );
}
