import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    // In some environments, this might log before the DOM is ready if not handled
    console.error("Could not find root element to mount to. Retrying...");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Ensure the DOM is fully loaded before attempting to mount
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}