import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'styles/GlobalStyles';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <GlobalStyles />
  </>
);
