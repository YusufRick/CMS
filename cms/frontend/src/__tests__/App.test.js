import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link from App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
