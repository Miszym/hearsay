import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonText from './';

describe('ButtonText', () => {
   it('renders without errors', () => {
      const { getByTestId } = render(<ButtonText />);
      expect(getByTestId('buttonText')).toBeInTheDocument();
   });

   it('calls onClick', () => {
      const onClickMock = jest.fn();
      const { getByTestId } = render(<ButtonText onClick={onClickMock} />);

      fireEvent.click(getByTestId('buttonText'));
      expect(onClickMock).toHaveBeenCalled();
   });
});
