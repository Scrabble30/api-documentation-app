import { NavLink } from "react-router";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #1a1a1a;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    color: #ffffff;
    margin: 0;
    font-size: 1.5rem;
`;

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
    color: #b3b3b3;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff;
    }

    &.active {
        color: #4caf50;
        font-weight: bold;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Game Vault API</Title>
            <Nav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/vision">Vision</StyledNavLink>
                <StyledNavLink to="/endpoints">Endpoints</StyledNavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
