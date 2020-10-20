import React from 'react';

interface RouteProps {}

const Routes: React.FC<RouteProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Routes;
