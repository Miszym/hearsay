import React from 'react';
import Header from './components/layout/Header';
import './styles/style.scss';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <Header text="Hearsay" />
      </ThemeProvider>
   );
};

App.defaultProps = {
   theme: {},
};

export default App;
