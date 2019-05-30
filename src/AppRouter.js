import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Version from './Version';
import NotFound from './NotFound';

class AppRouter extends Component{


    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/version" exact component={Version} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }

}

export default AppRouter;