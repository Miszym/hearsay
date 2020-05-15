import React from 'react';
import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Vendors from './components/pages/Vendors';
import './styles/style.scss';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Header text="Hearsay" />
            <Switch>
               <Route exact path="/">
                  <Main />
               </Route>
               <Route path="/vendors">
                  <Vendors />
               </Route>
            </Switch>
         </Router>
      </ThemeProvider>
   );
};

export default App;
