import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleBox from './';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('ArticleBox', () => {
   it('renders without errors', () => {
      const { getByTestId } = render(
         <ThemeProvider theme={theme}>
            <ArticleBox article={{ url: 'testHref' }} />
         </ThemeProvider>
      );
      expect(getByTestId('articleLink').getAttribute('href')).toBe('testHref');
   });
});
