import React from 'react';
import './App.css';
import Header from './component/Header/header';
import HomePage from './component/Home/home_page'

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <HomePage/>
      </div>
    )
  }
}
export default App;
