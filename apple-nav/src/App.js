import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: Helvetica, Arial, sans-serif;
  }

  body { font-size: 1.4rem }
`

const WrapApp = styled.div`
  width: 100vw;
  background-color: #313131;
  color: white;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <WrapApp>
          App
        </WrapApp>
      </React.Fragment>
    );
  }
}

export default App;
