import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AvatarSelection from './pages/avatarSelection';
import Home from './pages/home';
import MySpace from './pages/mySpace';
import Emotions from './pages/emotions';
import StudyTime from './pages/studyTime';
import SolarStudy from './pages/solarStudy';
import Games from './pages/games';
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
            <Route path="/myspace/emotions" element={<Emotions />} />
            <Route path="/studytime" element={<StudyTime />} />
            <Route path="/studytime/solar" element={<SolarStudy />} />
            <Route path="/games" element={<Games />} />
            <Route path="/numbers" element={<Numbers />} />
        </Routes>
    </Router>,
  </React.StrictMode>
);

reportWebVitals();
