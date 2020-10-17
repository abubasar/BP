import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Navbar from './Components/Navbar';
import { Route, withRouter ,Switch} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Home';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main:'#09B2BD'
    },
    secondary: {
      main:'#FFFFFF'
    },
    gray: {
      main: '#E5E5E5'
    }
  }
});

const App = withRouter(({ location }) => {
  return (
    <MuiThemeProvider theme={customTheme}>
    
    <React.Fragment>
    <Navbar/>
      <Switch>
       
      <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </React.Fragment>
    </MuiThemeProvider>
  );
});

export default App;

