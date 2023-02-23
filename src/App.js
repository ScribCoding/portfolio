import './styles/stylesheet.css'
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLayoutEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Panel from './components/Panel';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import About from './components/About';

import OverallScroll from './components/OverallScroll';
import OverallScrollMobile from './components/OverallScrollMobile';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function App() {




  return (
    
    <div className="App">
      <div id="body">
        <OverallScroll/>
        <OverallScrollMobile/>
      </div>
    </div>
  );
}

export default App;


