import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
 export default class RouteConfig extends Component {
     render() {
         return (
             <HashRouter>
                 <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" exact component={Home} />
                 </Switch>
             </HashRouter>
         )
     }
 }