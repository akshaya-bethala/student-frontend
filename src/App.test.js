import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student management system heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Student Management System/i);
  expect(headingElement).toBeInTheDocument();
});
