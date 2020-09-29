import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import signupReducer from './store/reducer/signupReducer';
import addMovies from './store/reducer/movieResult';
import favoriteList from './store/reducer/favoriteList';
import addProfile from './store/reducer/prilfeDetails_Reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
  signupReducer:signupReducer,
  addMovies:addMovies,
  favoriteList:favoriteList,
  addProfile:addProfile
})


const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
