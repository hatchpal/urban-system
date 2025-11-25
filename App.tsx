import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Process from './pages/Process';
import Expertise from './pages/Expertise';
import Resources from './pages/Resources';
import CaseStudyPGE from './pages/CaseStudyPGE';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans bg-warmGray text-darkText">
      {/* Sidebar Component handles its own state based on route */}
      <Sidebar currentPath={location.pathname} />

      {/* Main Content Area */}
      <main className="flex-1 w-full md:ml-72 min-h-screen transition-all duration-300">
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/process" element={<Process />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Resources />} /> {/* Merged into Resources for simplicity as per requirements */}
            
            {/* Case Studies */}
            <Route path="/case-study/pge-mdjp" element={<CaseStudyPGE />} />
            {/* Placeholders for others using Home or simple text */}
            <Route path="/case-study/lanebrook" element={<div className="pt-20 text-xl font-bold">Lanebrook Feasibility Case Study Coming Soon</div>} />
            <Route path="/case-study/gund" element={<div className="pt-20 text-xl font-bold">Gund Hall Modeling Case Study Coming Soon</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;