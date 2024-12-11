import React from 'react';

const EnvironmentDecorator = ({ children, environment }) => {
  const className = environment === 'light' ? 'light-mode' : 'dark-mode';

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnvironmentDecorator;