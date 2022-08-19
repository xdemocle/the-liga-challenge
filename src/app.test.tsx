import { render, screen } from '@testing-library/react';
import App from './app';

test('renders Unlock to text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Unlock to/i);
  expect(linkElement).toBeInTheDocument();
});
