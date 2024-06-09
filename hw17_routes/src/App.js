import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import pages from './pagesPaths';

function App() {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const noNavbar = ['/sign-in'];
  const showNavbar = !noNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;