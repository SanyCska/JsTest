import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './containers/PrivateRoute'
import './App.css';
import Home from './components/Home';
import LinkBtn from './components/LinkBtn.js';
import CssBaseline from "@material-ui/core/CssBaseline";
import News from './components/News.js';
import Profile from './components/Profile.js';
import ProfileRouter from './ProfileRouter';
import Login from './components/Login.js';

function App() {
  return (
    <CssBaseline>
      <div>
        <script>
        if (sessionStorage.getItem("authorized") === null) {
            sessionStorage.setItem("authorized", false)
        }

        console.log('авторизован?')
        console.log(sessionStorage.getItem("authorized"))

        if (sessionStorage.getItem("nick") === null){
          sessionStorage.setItem("nick", "Admin"),
          sessionStorage.setItem("password", "12345")
        }

        </script>
        <header className="header">
            <div className="top-menu">
              <LinkBtn to="/" label={'Главная'} />
              <LinkBtn to="/profile" label={'Профиль'} />
              <LinkBtn to="/news" label={'Новости'} />
              {/* <LinkBtn to="/abra-kadabra" label={'404'} /> */}
              {/* <LinkBtn to="/login" label={'Логин'} /> */}
            </div>
          </header>

          <hr />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/news" component={News} />
              <Route path="/login" component={Login} />
              <ProfileRouter path="/profile" component={Profile}/>
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
      </div>
      
    </CssBaseline>
  );
}

export default App;
