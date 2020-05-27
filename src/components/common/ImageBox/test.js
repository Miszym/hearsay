import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageBox from './';

describe('ImageBox', () => {
   it('renders without errors', () => {
      const { getByAltText } = render(<ImageBox />);
      expect(getByAltText(/newsImg/i)).toBeInTheDocument();
   });
});
