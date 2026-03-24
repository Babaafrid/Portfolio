import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div>
      {/* Skip link for keyboard users */}
      <a href="#main" className="skip-link">Skip to content</a>
      <Layout>
        <Suspense fallback={<div className="spinner" aria-live="polite">Loading...</div>}>
          <main id="main">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/certifications' element={<Certifications />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
