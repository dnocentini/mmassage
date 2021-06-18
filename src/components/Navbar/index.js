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

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>M Massage</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Home</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Services</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='specials'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Specials</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >About Us</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >Contact Us</NavLinks> 
                        </NavItem>
                    </NavMenu>
                    <NavIcon>
                        <a href='mailto: dinny0313@gmail.com' >
                            <MdEmail size='1.8em' color='#fff' />
                        </a>
                        <MdPhone size='1.8em' color='#fff' /> 
                    </NavIcon>      
                </NavbarContainer>    
            </Nav>
        </>
    )
}

export default Navbar;