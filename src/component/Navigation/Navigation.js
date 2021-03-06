import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../../routes";

const HeaderNav = styled.nav`
  padding: 1rem;
  background: #9af1ad;
  display: flex;
  text-transform: uppercase;
`;

const Item = styled(NavLink).attrs((props) => ({
  activeClassName: props.activeClassName || "activeLink",
}))`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s linear;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
  &:hover {
    color: blue;
  }
`;

const Navigation = () => (
  <HeaderNav>
    <Item to={routes.home} exact>
      home
    </Item>
    <Item to={routes.movies}>movies</Item>
  </HeaderNav>
);

export default Navigation;
