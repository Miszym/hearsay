import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleContent from './';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('ArticleContent', () => {
   it('renders without errors', () => {
      const { getByText } = render(
         <ThemeProvider theme={theme}>
            <ArticleContent article={{ title: 'title', content: 'content' }} />
         </ThemeProvider>
      );
      expect(getByText('title')).toBeInTheDocument();
      expect(getByText('content')).toBeInTheDocument();
   });
});
