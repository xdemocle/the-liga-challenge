import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import pkg from '../package.json';
import App from './app';
import DictionaryProvider from './context/dictionary';
import TeamProvider from './context/teams';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename={pkg.homepage}>
      <DictionaryProvider>
        <TeamProvider>
          <App />
        </TeamProvider>
      </DictionaryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
