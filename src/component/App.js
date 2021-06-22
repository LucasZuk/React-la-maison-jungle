import React from 'react';
import logo from '../logo.svg';
import '../scss/App.scss';
import Header from './Header';
import Footer from './Footer';
import ShoppingList from './ShoppingList';


function App() {
  return (<React.Fragment>
    <Header />
    <ShoppingList />
    <Footer />
  </React.Fragment>);
}

export default App;
