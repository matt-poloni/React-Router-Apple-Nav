import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapSubNav = styled(Link)`
  color: #313131;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    color: #407FCC;
  }
`

const SubNav = props => {
  return (
    <WrapSubNav to="#">
      {props.text}
    </WrapSubNav>
  )
}

export default SubNav;