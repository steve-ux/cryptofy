import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 10px 20px;
    font-family: Montserrat Black Italic;
    color: #EF233C;
    text-transform: uppercase;
  }
  li:hover {
    -webkit-text-stroke: 1px red;
    color: transparent; 
  }
  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/"><li>INICIO</li></Link>
      <Link to="/Criptos"><li>CRIPTOS</li></Link>
      <Link to="/AboutUs"><li>SOBRE</li></Link>
    </Ul>
  )
}

export default RightNav;