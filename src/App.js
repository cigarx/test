import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable.js'
import BaseLayout from './layout/Base'
import ContentFrame from './components/Content/ContentFrame'
import NewContentFrame from './components/newContent/newContentFrame'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <BaseLayout>
            <NewContentFrame/>
        </BaseLayout>
        {/*<ContentFrame/>*/}
      </div>
    );
  }
}

export default App;
