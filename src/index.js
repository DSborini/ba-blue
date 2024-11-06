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
import Numbers from './pages/numbers';

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
            <Route path="/numbers" element={<Numbers />} />
        </Routes>
    </Router>,
  </React.StrictMode>
);

reportWebVitals();
