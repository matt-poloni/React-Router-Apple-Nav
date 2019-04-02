import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WrapNav = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 1rem;

  &.active {
    color: A8A8A8;
  }
`

const Nav = props => {
  return (
    <WrapNav to={`${props.path}`}>{props.display}</WrapNav>
  )
}

export default Nav;