import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MdEmail, MdPhone} from 'react-icons/md';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIcon
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>M Massage</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/home">Home</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>Services</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>About</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Contact'>Contact Us</NavLinks> 
                        </NavItem> 
                    </NavMenu>
                    <NavIcon>
                        <a href='mailto: dinny0313@gmail.com' >
                            <MdEmail size='1.8em' color='#f6ebb4' />
                        </a>
                        <MdPhone size='1.8em' color='#f6ebb4' /> 
                    </NavIcon>      
                </NavbarContainer>    
            </Nav>
        </>
    )
}

export default Navbar;