# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import React, { useState } from "react";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover Me
    </div>
  );
};

const HoverText = () => {
  return (
    <div>
      Hovering right meow!
    </div>
  );
};

const HoverExample = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* Hover over this div to show/hide <HoverText /> */}
      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText />}
    </div>
  );
};

