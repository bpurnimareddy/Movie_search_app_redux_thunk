import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './component/Login-Page/login-page';
import Signup from './component/signup-page/signup-page';
import Home from './component/Home/home_page';
import FavList from './component/FavList/favList';
import MyProfile from './component/my-Profile/my-profile';


class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
        <Route path='/' exact component={Login}></Route>
        <Route path='/signup' exact component={Signup}></Route>
        <Route path='/home' exact component={Home}></Route>
        <Route path='/favList' exact component={FavList}></Route>
        <Route path='/my-profile' exact component={MyProfile}></Route>
      </Router>
      </div>
    )
  }
}
export default App;

