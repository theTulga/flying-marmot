import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import SignupPage from './pages/Signup.js';
import BusinessviewPage from './pages/Businessview.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/signup" element={<SignupPage />} />
         
      <Route path="/businessview" element={<BusinessviewPage />} />
    </Routes>
  );
}

export default App;
