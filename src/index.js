import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<BrowserRouter basename="https://github.com/Staravoy/-goit-react-hw-01-components-tato.git">
  <App />
</BrowserRouter>