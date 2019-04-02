import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

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
