import React, { Component } from 'react';
import GlobalStyles from './GlobalStyles';
import NavWrapper from './components/NavWrapper';
import siteMap from './data';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <NavWrapper siteMap={siteMap} />
      </React.Fragment>
    );
  }
}

export default App;
