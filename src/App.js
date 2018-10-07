import React, { Component } from 'react';
import AppContainer from "./Containers/AppContainer";
class App extends Component {
  render() {
    return (
      <div className="app-layout container-fluid">
        <AppContainer />
      </div>
    );
  }
}

export default App;
