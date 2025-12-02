
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import CookieConsent from './CookieConsent';
import { Menu, X, Linkedin, Youtube } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Google Analytics Page View Tracking
  React.useEffect(() => {
    // Check if gtag exists (it will be injected by index.html)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-MEASUREMENT_ID', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-ae-darker text-ae-light">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-ae-darker/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-32 items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-20 h-20 flex-shrink-0 relative transition-transform group-hover:scale-105">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 50C0 22.3858 22.3858 0 50 0H100V100H50V50H0Z" fill="#F97316"/>
                  <rect x="0" y="50" width="50" height="50" fill="#F59E0B"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-4xl font-extrabold leading-none tracking-tight text-white group-hover:text-ae-accent transition-colors">AEstruct</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-bold transition-colors hover:text-ae-accent ${
                    location.pathname === item.path ? 'text-ae-accent' : 'text-ae-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact">
                <Button variant="primary" size="lg" className="font-bold shadow-lg shadow-ae-accent/20">Schedule Consultation</Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-ae-light p-3 hover:bg-ae-card rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-ae-card border-b border-white/10 absolute w-full shadow-2xl">
            <div className="px-6 pt-4 pb-8 space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 rounded-lg text-xl font-bold text-ae-light hover:bg-ae-dark hover:text-ae-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full font-bold">Schedule Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ae-dark border-t border-white/5 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 relative">
                   <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 50C0 22.3858 22.3858 0 50 0H100V100H50V50H0Z" fill="#F97316"/>
                      <rect x="0" y="50" width="50" height="50" fill="#F59E0B"/>
                    </svg>
                 </div>
                <h3 className="font-sans text-2xl font-bold text-white">AEstruct Inc.</h3>
              </div>
              <p className="text-ae-muted max-w-md text-lg">
                Empowering independent production companies with enterprise-grade AI tooling. 
                Scale your creativity, optimize your back-office.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Solutions</h4>
              <ul className="space-y-3 text-ae-muted text-base">
                <li>Script Analysis</li>
                <li>Financial Forecasting</li>
                <li>Market Intelligence</li>
                <li>Pitch Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Contact & Connect</h4>
              <ul className="space-y-3 text-ae-muted text-base">
                <li>
                  <a href="mailto:contact@aestruct.com" className="hover:text-ae-accent transition-colors">
                    contact@aestruct.com
                  </a>
                </li>
                <li>New York, NY</li>
                <li><Link to="/contact" className="text-ae-accent hover:underline font-medium">Schedule a Call</Link></li>
                <li className="pt-4 flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/aestruct-inc/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ae-muted hover:text-ae-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@AEstructInc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-ae-muted hover:text-ae-accent transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ae-muted">
            <div>
              © {new Date().getFullYear()} AEstruct Inc. All rights reserved.
            </div>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-ae-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-ae-accent transition-colors">Terms of Use</Link>
              <Link to="/cookie-policy" className="hover:text-ae-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
      
      <CookieConsent />
    </div>
  );
};

export default Layout;
