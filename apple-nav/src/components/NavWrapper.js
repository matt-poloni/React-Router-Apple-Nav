import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const WrapNavHeader = styled.header`
  width: 100vw;
  background-color: #313131;
  color: white;
  text-align: center;
  padding: 1.5em;
`

const NavWrapper = props => {
  return (
    <WrapNavHeader>
      {props.siteMap.map(link =>
        <Nav {...link} key={link.path} />
      )}
    </WrapNavHeader>
  )
}

export default NavWrapper;