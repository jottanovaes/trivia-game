import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import InGame from './pages/InGame';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      <Route path="/ingame" render={ (props) => <InGame { ...props } /> } />
      <Route path="/settings" render={ (props) => <Settings { ...props } /> } />
      <Route path="/feedback" render={ (props) => <Feedback { ...props } /> } />
    </Switch>
  );
}
