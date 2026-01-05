import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    // A propriedade _reactRoot é usada para evitar a recriação da raiz do React
    // em um ambiente de desenvolvimento com HMR (Hot Module Replacement).
    if (!(rootElement as any)._reactRoot) {
      (rootElement as any)._reactRoot = ReactDOM.createRoot(rootElement);
    }
    
    (rootElement as any)._reactRoot.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

// Garante execução apenas após o carregamento do DOM
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  startApp();
} else {
  document.addEventListener('DOMContentLoaded', startApp);
}
