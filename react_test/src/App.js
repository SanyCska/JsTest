import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import PrivateRoute from './containers/PrivateRoute'
import './App.css';
import Home from './components/Home';
import LinkBtn from './components/LinkBtn.js';
import CssBaseline from "@material-ui/core/CssBaseline";
import News from './components/News.js';

function App() {
  return (
    <CssBaseline>
      <div>
        <header className="header">
            <div className="top-menu">
              <LinkBtn to="/" label={'Главная'} />
              {/* <LinkBtn to="/profile" label={'Профиль'} /> */}
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
              {/* <Route path="/login" component={LoginContainer} /> */}
              {/* <PrivateRoute path="/profile" component={ProfileContainer} /> */}
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
      </div>
      
    </CssBaseline>
  );
}

export default App;
