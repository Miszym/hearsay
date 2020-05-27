import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SourceBox from './';
import theme from '../../../theme';
import { ThemeProvider } from 'styled-components';

describe('SourceBox', () => {
   it('renders without errors', () => {
      const { getByTestId } = render(
         <ThemeProvider theme={theme}>
            <SourceBox />
         </ThemeProvider>
      );
      expect(getByTestId('sourcebox')).toBeInTheDocument();
   });

   it('calls toggleCheck on checkbox click', () => {
      const toggleCheckMock = jest.fn();
      const { getByTestId } = render(
         <ThemeProvider theme={theme}>
            <SourceBox toggleCheck={toggleCheckMock} />
         </ThemeProvider>
      );

      fireEvent.click(getByTestId('sourceCheckbox'));

      expect(toggleCheckMock).toHaveBeenCalled();
   });

   it('checks box out with "checked" prop', () => {
      const { getByTestId } = render(
         <ThemeProvider theme={theme}>
            <SourceBox checked={true} />
         </ThemeProvider>
      );

      expect(getByTestId('sourcebox')).toHaveClass('checked');
   });
});
