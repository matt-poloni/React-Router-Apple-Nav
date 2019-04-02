import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import SubNav from './SubNav';
import styled from 'styled-components';

const WrapNavHeader = styled.nav`
  width: 100vw;
  background-color: #313131;
  color: white;
  text-align: center;
  padding: 1em;
`

const WrapSubNav = styled.div`
  width: 100vw;
  background-color: #F6F6F6;
  color: #313131;
  text-align: center;
  padding: 2em;
`

const NavWrapper = props => {
  return (
    <header>
      <WrapNavHeader>
        {props.siteMap.map(link =>
          <Nav {...link} key={link.path} />
        )}
      </WrapNavHeader>
      {props.siteMap
        .filter(view => view.subNav.length > 0)
        .map(view =>
          <Route
            exact
            path={view.path}
            key={view.path}
            render={() =>
              <WrapSubNav>
                {view.subNav.map(link =>
                  <SubNav {...link} key={link.text} />
                )}
              </WrapSubNav>
            }
          />
        )}
    </header>
  )
}

export default NavWrapper;