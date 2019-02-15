import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  background-color: ${props => props.theme.navBackground};
  border-radius: 5px 0 0 5px;
  margin: 0;
  list-style: none;
  font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (1700 - 320)));

  @media (min-width: 1700px) {
    font-size: 26px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.navLinkColor};
    /* remove blue highlight when clicking quickly on mobile chrome */
    user-select: none;  
    -webkit-tap-highlight-color: transparent;
  }

  li {
    margin-right: 20px;
    padding: 0px;

    :nth-child(n+1) {
      transition: transform 0.4s ease-in-out;
  
      :active {
        transform: scale(1.2);
        transition: transform 0s;
      }
    }

    :last-of-type {
      margin-right: 0;
    }

    @media (min-width: 576px) {
      margin-right: 40px;
    }
  }
`;

export const LogoLink = styled(Link)`
  /* remove blue highlight when clicking quickly on mobile chrome */
  user-select: none;  
  -webkit-tap-highlight-color: transparent;

  img {
    width: 50px;
    padding: 20px;

    transition: transform 0.4s cubic-bezier(.54,.84,.44,.67);

    :active {
      transform: rotate(-360deg);
      transition: transform 0s;
    }
  
    @media (min-width: 576px) {
      width: 60px;
    }
  
    @media (min-width: 992px) {
      width: 65px;
    }
  }
`;