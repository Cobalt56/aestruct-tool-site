import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center animate-in fade-in duration-300">
          <div className="bg-red-500/10 p-4 rounded-full mb-6 border border-red-500/20">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">System Anomaly Detected</h2>
          <p className="text-ae-muted max-w-md mb-8">
            Our specialized logic encountered an unexpected condition. 
            The production OS has contained the issue.
          </p>
          <div className="flex gap-4">
             <Button onClick={this.handleRetry} variant="secondary">
               Try Again
             </Button>
             <Button onClick={this.handleReload} variant="primary">
               Reload Application
             </Button>
          </div>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="mt-8 p-4 bg-black/50 rounded border border-white/10 text-left max-w-2xl overflow-auto w-full">
               <p className="font-mono text-xs text-red-400 mb-2">{this.state.error.toString()}</p>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;