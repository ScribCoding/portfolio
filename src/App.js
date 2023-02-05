import './styles/stylesheet.css'
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLayoutEffect, useRef } from 'react';

import Header from './components/Header';
import Panel from './components/Panel';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function App() {

  

  const container = useRef();
  const header_container = useRef();


  const scrollToHome = () =>{
    gsap.to(window,{duration: 1, scrollTo:
    {y: container.current.offsetWidth*0}})
  }
  const scrollToPortfolio = () =>{
    gsap.to(window,{duration: 1, scrollTo:
    {y: container.current.offsetWidth/2}})
    
  }
  const scrollToContact = () =>{
    gsap.to(window,{duration: 1, scrollTo:
    {y: container.current.offsetWidth}})
    
  }


  
//------VARIABLES & FUNCTIONS END------------------//
  useLayoutEffect(()=>{
    let sections = gsap.utils.toArray(container.current.children);
    let containerContext = gsap.context(()=>{
      let scrollSections = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
          scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: container.current,
          pin: true,
          pinspacing: false,
          scrub: 0.5,
          snap: {
            snapTo: 1 / 2, 
            duration: 0.5,
            directional: false,
            ease: "power3",
          },
          end: () => "+=" + container.current.offsetWidth
        }
      }); 
    },container)

//-----------------------MAIN CONTAINER ANIMATION---------------------------------------//

    
    let headerContext = gsap.context(()=>{
    let progressCircle = document.querySelector(".progress-circle");
    let progressBarLength = window.body.offsetWidth;

      let progressBar = gsap.to(progressCircle, {
        x: progressBarLength,
        ease: "none",
          scrollTrigger: {
          invalidateOnRefresh: true,
          markers: true,
          trigger: container.current,
          pinspacing: false,
          scrub: 1,
          start: `99.9% bottom`,
          end:  () => "+=" + container.current.offsetWidth
        }
      }); 

      window.addEventListener("resize", ()=>{
        if(window.body.offsetWidth !== undefined){
          progressBar.vars.x = window.body.offsetWidth;  
        }
      });

    },header_container)

    return () => {
      containerContext.revert();
      headerContext.revert();
    }

    

  },[])


//-----------------------PROGRESS CIRCLE---------------------------------------//
//------------------------------GSAP---------------------------------------//


  return (
    
    <div className="App">
      <div id="body">
        <Header button1={scrollToHome} button2={scrollToPortfolio} button3= {scrollToContact} reference = {header_container}/>
        <section className="scroll">
          <div className="container" id="container" ref={container}>
            <Panel className={"panel one"}/>
            <Panel className={"panel two"}/>
            <Panel className={"panel three"}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;


