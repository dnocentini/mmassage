import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home">Home</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="contact">Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>   
    )
}

export default Sidebar;