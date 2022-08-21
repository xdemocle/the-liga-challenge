import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import DictionaryProvider from './context/dictionary';
import TeamProvider from './context/teams';

test('renders Unlock to text', () => {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <DictionaryProvider>
          <TeamProvider>
            <App />
          </TeamProvider>
        </DictionaryProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
  const linkElement = screen.getByText(/Xceed Liga Challenge 2022/i);
  expect(linkElement).toBeInTheDocument();
});
