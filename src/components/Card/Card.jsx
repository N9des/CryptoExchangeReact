import axios from "axios";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.ul`
  width: 100%;
`;

const Container = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 40px;

  .crypto {
    &--image {
      max-width: 50px;
    }
  }

  .green {
    color: var(--green);
  }

  .red {
    color: var(--red);
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  .crypto {
    &--name {
      font-size: 1.313em;
      font-weight: 500;
    }
    &--symbol {
      font-size: 1em;
      font-weight: 300;
    }
  }
`;

const PriceContainer = styled.div`
  text-align: right;
  .crypto--price {
    font-size: 1.25em;
    font-weight: 300;
  }
`;

const CryptoPercentage = styled.span`
  font-size: 0.875em;
  font-weight: 500;
`;

export default function Card({ search, setSearch }) {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((reponse) => {
        setData(reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <Wrapper>
      {data
        .filter((crypto) => {
          return crypto.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((crypto) => {
          return (
            <Container key={crypto.id}>
              <img src={crypto.image} alt="/" className="crypto--image" />
              <InfoWrapper>
                <NameContainer>
                  <h4 className="crypto--name">{crypto.name}</h4>
                  <h5 className="crypto--symbol">
                    {crypto.symbol.toUpperCase()}
                  </h5>
                </NameContainer>
                <PriceContainer>
                  <p className="crypto--price">
                    ${crypto.current_price.toLocaleString()}
                  </p>

                  {crypto.price_change_percentage_24h < 0 ? (
                    <CryptoPercentage className="red">
                      <FiArrowDownLeft className="icon-arrow" />
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </CryptoPercentage>
                  ) : (
                    <CryptoPercentage className="green">
                      <FiArrowUpRight className="icon-arrow" />
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </CryptoPercentage>
                  )}
                </PriceContainer>
              </InfoWrapper>
            </Container>
          );
        })}
    </Wrapper>
  );
}

Card.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: ""
};
