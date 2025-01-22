import React, { Suspense } from 'react';
import { ErrorWidget } from 'widgets/ErrorWidget/ui/ErrorWidget';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback="">
          <ErrorWidget />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
