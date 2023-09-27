import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import "./styles.scss";

import Crypto from "./Crypto";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const StyledGlobal = createGlobalStyle`
  :root {
    --black-blue : #2C3E50;
    --white : #F5F5F5;
    --red : #DE0000;
    --green : #00D448;

    background-color: var(--white);
    color: var(--black-blue);
  }

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
  }
`;

root.render(
  <StrictMode>
    <StyledGlobal />
    <Crypto />
  </StrictMode>
);
