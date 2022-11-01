import React, { useState, useEffect, useRef } from "react";

 import {  Transition } from 'react-transition-group';

    
  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out,  height${duration}ms ease-in-out`,
    opacity: 0,
    position: 'relative',
    bottom: '-15px',
    height:"0",
    display:"none"
    // left: "50em"
  }
    const transitionStyles = {
    entering: {height: "auto",opacity: 1, bottom: '0px' ,display:"block"},
    entered:  { height: "auto",opacity:1, bottom: '0px' ,display:"block"},
    exiting:  { height: "50%",opacity: 1, bottom: '0px',display:"block"},
    exited:  { opacity: 0 },
  };

  

  
  const  RTGTransition = ({ in: inEdit, children }) => (
    <Transition in={inEdit} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
  export default RTGTransition;




