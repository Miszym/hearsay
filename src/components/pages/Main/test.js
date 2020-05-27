import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('ArticleBox', () => {
   const sampleArticles = [
      { content: 'cont', description: 'desc', url: 'url1' },
      { content: 'cont', description: 'desc', url: 'url2' },
   ];

   it('renders articles without errors', () => {
      const { getAllByText } = render(
         <ThemeProvider theme={theme}>
            <Main articles={sampleArticles} />
         </ThemeProvider>
      );
      expect(getAllByText(/desc/i)).toHaveLength(2);
   });
});
