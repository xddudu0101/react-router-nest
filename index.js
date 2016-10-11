import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,Redirect } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import repo from './modules/Repos'
import AboutId from './modules/AboutId'
import repoId from './modules/ReposId'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repo" name="ReposList" component={repo}>
                <Route path="/repoId/:id" component={repoId} />
            </Route>
            <Route path="/about" name="AboutList" component={About}>
                <Route path="AboutId/(:id)" name="AboutId" component={AboutId} />
            </Route>
            <Redirect to="/repo" component={repo} />
        </Route>
    </Router>

), document.getElementById('app'));
