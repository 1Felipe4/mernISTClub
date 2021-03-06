import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Activate from './auth/Activate';
import Signin from './auth/Signin';
import Signup from './auth/Signup';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin} />
                <Route path="/auth/activate/:token" component={Activate} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes