import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #55513d;
    display: flex;
    align-items: center;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    margin-right: 24px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #e2dac3;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #e2dac3;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
    color: #2c2b20;
    }
`;

export const NavIcon = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

