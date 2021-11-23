import React from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../scss/index.scss';


function App() {
  return (<React.Fragment>
    <Header />
    <ShoppingList />
    <Footer />
  </React.Fragment>);
}

export default App;
