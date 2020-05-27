import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingIndicator from './';

describe('LoadingIndicator', () => {
   it('renders without errors', () => {
      const { getByAltText } = render(<LoadingIndicator />);
      expect(getByAltText(/loading.../i)).toBeInTheDocument();
   });
});
