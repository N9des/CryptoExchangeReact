import { FiBell } from "react-icons/fi";
import styled from "styled-components";

import imgProfil from "../../assets/img-profil.jpg";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  grid-column: 1 / -1;

  .icon-bell {
    width: 30px;
    height: 30px;
  }
`;

const ProfilImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <ProfilImg>
        <img src={imgProfil} alt="profil" />
      </ProfilImg>
      <FiBell className="icon-bell" />
    </NavContainer>
  );
}
