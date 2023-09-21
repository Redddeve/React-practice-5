import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
    <GlobalStyles />
  </>
);
