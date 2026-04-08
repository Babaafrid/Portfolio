import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';

const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Experience   = lazy(() => import('./pages/Experience'));
const Projects     = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact      = lazy(() => import('./pages/Contact'));

const ROUTE_ORDER = ['/', '/about', '/experience', '/projects', '/certifications', '/contact'];

const variants = {
  initial:  (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  animate:  { opacity: 1, x: 0 },
  exit:     (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

let prevPath = '/';

function AnimatedRoutes() {
  const location = useLocation();
  const prevIdx  = ROUTE_ORDER.indexOf(prevPath);
  const curIdx   = ROUTE_ORDER.indexOf(location.pathname);
  const dir      = curIdx >= prevIdx ? 1 : -1;
  prevPath       = location.pathname;

  return (
    <AnimatePresence mode="wait" custom={dir}>
      <motion.div
        key={location.pathname}
        custom={dir}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.22, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path='/'               element={<Home />} />
          <Route path='/about'          element={<About />} />
          <Route path='/experience'     element={<Experience />} />
          <Route path='/projects'       element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact'        element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div>
      {/* Skip link for keyboard users */}
      <a href="#main" className="skip-link">Skip to content</a>
      <Layout>
        <Suspense fallback={<div className="spinner" aria-live="polite">Loading...</div>}>
          <main id="main">
            <AnimatedRoutes />
          </main>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
