import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom"

const route = ReactDOM.createRoot(document.getElementById('root'))
route.render(
  <Router>
    <App />
  </Router>,
  
);