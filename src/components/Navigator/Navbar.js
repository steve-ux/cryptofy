import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  height: 11vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  z-index: 20;

  .logo {
    padding: 0.5px 30px;
  }
  .logoNav {
    width: 7vw;
    padding: 12px;
  }
  @media (max-width: 759px) {
    .logoNav {
      width: 12vw;
    }
  }
  @media (max-width: 520px) {
    .logoNav {
      width: 14vw;
    }
  }
  @media (max-width: 420px) {
    .logoNav {
      width: 18vw;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navigator">
      <div className="logo">
        <p></p>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
