import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductContact from './pages/ProductContact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import ToolDetail from './pages/ToolDetail';
import TeaserModal from './components/TeaserModal';
import ErrorBoundary from './components/ErrorBoundary';
import { Tool } from './types';

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleOpenTeaser = (tool: Tool) => {
    setSelectedTool(tool);
  };

  const handleCloseTeaser = () => {
    setSelectedTool(null);
  };

  return (
    <HashRouter>
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home onTryTeaser={handleOpenTeaser} />} />
            <Route path="/products" element={<Products onTryTeaser={handleOpenTeaser} />} />
            <Route path="/products/:toolId" element={<ToolDetail onTryTeaser={handleOpenTeaser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-contact" element={<ProductContact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </ErrorBoundary>
      </Layout>

      {/* Modal sits outside routes to overlay anywhere */}
      {selectedTool && (
        <TeaserModal 
          tool={selectedTool} 
          onClose={handleCloseTeaser} 
        />
      )}
    </HashRouter>
  );
};

export default App;