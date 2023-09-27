import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import Card from "../Card/Card";

const Wrapper = styled.div`
  grid-column: 1 / -1;
`;

const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TitleChart = styled.h4`
  font-size: 1.688em;
  font-weight: 300;
`;

const SearchBar = styled.div`
  filter: drop-shadow(4px 4px 8px rgba(44, 62, 80, 0.1));

  input {
    height: 30px;
    width: 120px;
    background-color: #fff;
    border: none;
    border-radius: 30px;
    outline: none;
    padding-left: 10px;
  }

  .icon-search {
    position: absolute;
    top: 5px;
    right: 10px;
  }
`;

export default function Charts() {
  const [search, setSearch] = useState("");

  const handelSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <Wrapper>
      <ContainerTitle>
        <TitleChart>Live charts</TitleChart>
        <SearchBar>
          <input type="text" placeholder="Search..." onChange={handelSearch} />
          <FiSearch className="icon-search" />
        </SearchBar>
      </ContainerTitle>
      <Card search={search} setSearch={setSearch} />
    </Wrapper>
  );
}
