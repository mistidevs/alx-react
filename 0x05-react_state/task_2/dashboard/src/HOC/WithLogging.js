import React, { useEffect } from 'react';

function WithLogging(WrappedComponent) {
  const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';

  function WithLoggingComponent(props) {
    useEffect(() => {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);

      return () => {
        console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

  return WithLoggingComponent;
}

export default WithLogging;
