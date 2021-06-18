import React from 'react';
import logo from '../logo.svg';
import '../scss/App.scss';
import Header from './Header';
import ShoppingList from './ShoppingList';


function App() {
  return (<React.Fragment>
    <Header />
    <ShoppingList />
  </React.Fragment>);
}

export default App;
