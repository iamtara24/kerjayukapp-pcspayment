import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationPage from './pages/NotificationPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Route index element={<App />} /> */}
          <Route path="/notification" element={<NotificationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);