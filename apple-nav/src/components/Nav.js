import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      exact
      to={`${props.path}`}
      activeClassName="active"
      id={props.path === '/' ? 'home' : ''}
    >
      {typeof props.display === 'string'
        ? props.display
        : <FontAwesomeIcon
            className=""
            icon={props.display}
            size='lg'
          />
      }
    </WrapNav>
  )
}

export default Nav;