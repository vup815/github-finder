import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { REMOVE_ALERT, SET_ALERT } from './context/types';

const App = () => {
    const showAlert = (msg, type) => {
        dispatchEvent({
            type: SET_ALERT,
            payload: {
                msg,
                type,
            },
        });
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
            });
        }, 3456);
    };
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Navbar />
                        <div className="container">
                            <Alert setAlert={showAlert} alert={alert} />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/user/:login" component={user} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
