import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';

import {Context} from './Context/AuthContext'

function CustomRoute({isPrivate, ...rest}){
  const {authenticated} = useContext(Context)
  if(isPrivate && !authenticated){
    alert("Usuário não autenticado");
    return <Redirect to="/login"/>
    
  }

  return <Route {...rest}/>
}
export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/users" component={Users} />
    </Switch>
  );
}