import React, { Component } from 'react'; 
import './App.css';
import Header from './component/layout/Header'
import Body from './component/layout/Body'
import Footer from './component/layout/Footer'
class App extends Component {
  render() {
    return (
       <div>
            <Header/> 
            <Body/>
            <Footer/>
       </div>
    );
  }
}

export default App;
