import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import NavWrapper from './components/NavWrapper';
import siteMap from './data';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
library.add(faApple, faSearch, faShoppingBag);

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
