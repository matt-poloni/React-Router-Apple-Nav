import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WrapNav = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover, &.active {
    color: #A7A7A7;
  }
`

const Nav = props => {
  return (
    <WrapNav
      to={`${props.path}`}
      activeClassName="active"
      id={props.path === '/' ? 'home' : ''}
    >
      {props.display}
    </WrapNav>
  )
}

export default Nav;