import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;


  ul, ol {
    list-style:none;
  }
  
  .nav > li {
    float:left;
    font-family: Montserrat Black Italic;
    color: #EF233C;
    text-transform: uppercase;
    margin-right: 3rem;
  }
  
  .nav li a {
    background-color:#000;
    color:#EF233C;
    text-decoration:none;
    padding:8px 5px;
    display:block;
  }
  
  .nav li a:hover {
    -webkit-text-stroke: 1px red;
    color: transparent; 
  }
  
  .nav li ul {
    display:none;
    position:absolute;
    min-width:140px;
  }
  
  .nav li:hover > ul {
    display:block;
  }
  
  .nav li ul li {
    position:relative;
    margin-left: -2rem;
    font-family: Montserrat Black Italic;
    color: #EF233C;
    text-transform: uppercase;
    z-index: 2;
  }

  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
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
      color: white;
    }
    .nav li ul {
      display:none;
      position:absolute;
      min-width:140px;
    }
    .nav li ul li {
      position:relative;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} id="menu">
      <ul className="nav">
				<li><Link to="/">INICIO</Link></li>
        <li><Link to="/AboutUs">SOBRE</Link></li>
				<li><Link to="/Criptos">CRIPTOS</Link>
					<ul>
						<li><Link to="/Bitcoin">BTC</Link></li>
						<li><Link to="/Ethereum">ETH</Link></li>
						<li><Link to="/Dogecoin">DOGE</Link></li>
            <li><Link to="/Classic">ETC</Link></li>
            <li><Link to="/Mana">MANA</Link></li>
            <li><Link to="/Dai">DAI</Link></li>
            <li><Link to="/Ripple">XRP</Link></li>
            <li><Link to="/Litecoin">LTC</Link></li>
            <li><Link to="/Cardano">ADA</Link></li>
            <li><Link to="/Polkadot">DOT</Link></li>
            <li><Link to="/Binance">BNB</Link></li>
            <li><Link to="/UBI">UBI</Link></li>
					</ul>
				</li>				
			</ul>
    </Ul>
  )
}

export default RightNav;