import React, {Component} from 'react';
// import { render } from '@testing-library/react';
import Home from './Home';
// import logo from './logo.svg';
// import './App.css';
import CategoryPage from './CategoryPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home/> */}
        <CategoryPage/>
      </div>
    );
  }
}

export default App;