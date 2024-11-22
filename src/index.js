import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AvatarSelection from './pages/avatarSelection';
import Home from './pages/home';
import MySpace from './pages/mySpace';
import Emotions from './pages/emotions';
import Pain from './pages/pain';
import Routine from './pages/routine';
import StudyTime from './pages/studyTime';
import SolarStudy from './pages/solarStudy';
import EnFamily from './pages/enFamily';
import EnFruits from './pages/enFruits';
import Games from './pages/games';
import Quiz from './pages/quiz';
import Memory from './pages/memory';
import MemoryFeedback from './pages/memoryFeedback';
import Feedback from './pages/feedback';
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
            <Route path="/myspace/pain" element={<Pain />} />
            <Route path="/myspace/routine" element={<Routine />} />
            <Route path="/studytime" element={<StudyTime />} />
            <Route path="/studytime/solar" element={<SolarStudy />} />
            <Route path="/studytime/enfamily" element={<EnFamily />} />
            <Route path="/studytime/enfruits" element={<EnFruits />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/quiz" element={<Quiz />} />
            <Route path="/games/memory" element={<Memory />} />
            <Route path="/games/memory/feedback" element={<MemoryFeedback />} />
            <Route path="/games/quiz/feedback" element={<Feedback />} />
            <Route path="/numbers" element={<Numbers />} />
        </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
