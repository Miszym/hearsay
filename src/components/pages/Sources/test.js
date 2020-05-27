import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sources from './';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('ArticleBox', () => {
   const sampleSources = [
      { id: '1', name: 'name', description: 'desc', url: 'url' },
      { id: '1', name: 'name', description: 'desc', url: 'url' },
   ];

   it('renders articles without errors', () => {
      const { getAllByText } = render(
         <ThemeProvider theme={theme}>
            <Sources sources={sampleSources} />
         </ThemeProvider>
      );
      expect(getAllByText('desc')).toHaveLength(2);
   });
});
