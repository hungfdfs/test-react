import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        Hello word
        <MyComponent></MyComponent>
      </div>
    )
  }
}



export default App;
