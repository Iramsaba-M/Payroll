// Head.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import HeadComponents from './HeadComponents';
import HeadConfi from './HeadConfi';

const Head = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <HeadComponents props={HeadConfi} currentPath={currentPath} />
  );
};

export default Head;