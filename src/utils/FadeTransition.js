import React, { useState, useEffect, useRef } from "react";

 import {  Transition } from 'react-transition-group';


const duration = 3000;

const defaultStyle = {
   transition: ` transform ${duration}ms ease-in-out,height ${duration}ms ease-in-out`,
      transform: "translateX(-100%)",
  height: "0",

}

const transitionStyles = {
    entering: { height:"auto", transform: "translateX(0)" },
    entered: { height:"auto", transform: "translateX(0)" },
    exiting: { height:"auto", transform: "translateX(-100%)" },
    exited: {  transform: "translateX(-100%)" }
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
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
export default Fade;