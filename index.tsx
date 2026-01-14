import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white p-8 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-oswald font-bold mb-4 uppercase tracking-tighter">Tuca Racing</h1>
            <p className="text-neutral-400 mb-8 font-light">Detectamos uma instabilidade na renderização do site. Clique no botão abaixo para atendimento técnico direto via WhatsApp.</p>
            <a href="https://wa.me/5519996602060" className="inline-block bg-red-600 px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">Agendar via WhatsApp</a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);