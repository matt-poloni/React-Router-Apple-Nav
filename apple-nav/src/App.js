import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavWrapper from './components/NavWrapper';
import siteMap from './data';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Route
          path="/"
          render={props => <NavWrapper {...props} siteMap={siteMap} />}
        />
      </React.Fragment>
    );
  }
}

export default App;
