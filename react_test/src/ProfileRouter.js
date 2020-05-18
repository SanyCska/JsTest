import React, { Component } from 'react'
import Profile from './components/Profile.js';
import { Route, Redirect } from 'react-router-dom';

const ProfileRouter = props => {
        // const { redirect } = this.state;

        console.log('авторизован?')
        console.log(sessionStorage.getItem("authorized"))

        if (sessionStorage.getItem("authorized")) {
            return <Redirect to='/login'/>;
        }

        return <Route path={props.path} component={props.component}></Route>;
}


export default ProfileRouter
