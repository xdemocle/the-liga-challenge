import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import App from './app';
import { RenderWithProviders } from './utilities/test';

test('renders App', () => {
  render(
    <RenderWithProviders>
      <App />
    </RenderWithProviders>
  );

  const linkElement = screen.getByText(/Xceed Liga Challenge 2022/i);
  expect(linkElement).toBeInTheDocument();
});
