import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AvatarSelection from './pages/avatarSelection';
import Home from './pages/home';
import MySpace from './pages/mySpace';
import Story from './pages/story';
import Calendar from './pages/calendar';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/avatar" element={<AvatarSelection />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myspace" element={<MySpace />} />
            <Route path="/story" element={<Story />} />
            <Route path="/calendar" element={<Calendar />} />
        </Routes>
    </Router>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
