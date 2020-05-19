import React from 'react';
import Header from './components/layout/Header';
import MainContainer from './components/containers/MainContainer';
import SourcesContainer from './components/containers/SourcesContainer';
import './styles/style.scss';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

const App = () => {
   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Router>
               <Header text="Hearsay" />
               <Switch>
                  <Route exact path="/">
                     <MainContainer />
                  </Route>
                  <Route path="/sources">
                     <SourcesContainer />
                  </Route>
               </Switch>
            </Router>
         </ThemeProvider>
      </Provider>
   );
};

export default App;
