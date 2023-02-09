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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function App() {

  const about_container = useRef();
  const portfolio_container = useRef();
  const container = useRef();
  const header_container = useRef();
  const contactForm_container = useRef();

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
    },container.current)

//-----------------------MAIN CONTAINER ANIMATION---------------------------------------//

    
    let headerContext = gsap.context(()=>{
    let progressCircle = document.querySelector(".progress-circle");
    let progressBarLength = document.querySelector(".progress-container").offsetWidth;
    console.log(containerContext.data[0].totalProgress())

      let progressBar = gsap.to(progressCircle, {
        onUpdate: function(){
          console.log(this.totalProgress())
        },
        x: progressBarLength,
        ease: "none",
          scrollTrigger: {
            markers: true,
            invalidateOnRefresh: true,
            containerAnimation: containerContext.data[0],
            trigger: document.querySelector(".one"),
            pinspacing: false,
            scrub: 0.8,
            start: `start start`,
            end: () => "+=" + container.current.offsetWidth*2/3
        }
      }); 

      window.addEventListener("resize", ()=>{
        if(window.body.offsetWidth !== undefined){
          //changes the progress length of the progress tracker
          progressBar.vars.x = document.querySelector(".progress-container").offsetWidth;
          //resets the progress to 0 so that overall container isn't affected by the window resize
          gsap.to(window,{duration: 0.2, scrollTo:
            {y: 0}})
        }
      });

    },header_container.current)

//-----------------------PROGRESS CIRCLE---------------------------------------//

let boxes = gsap.utils.toArray(portfolio_container.current.children);
let portfolioContext = gsap.context(()=>{
  let portfolioAnim = gsap.from(boxes,{
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    ease: "back",
    stagger: {
     each: 0.1,
     from: "start",
    },
    scrollTrigger: {
      containerAnimation: containerContext.data[0],
      trigger: portfolio_container.current,
    }
  });
},portfolio_container.current)

//-----------------------Portfolio Context----------------------------------------------//

let form = gsap.utils.toArray(contactForm_container.current.children);
let contactFormContext = gsap.context(()=>{
  let contactFormAnim = gsap.from(form,{
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "back",
    stagger: {
     each: 0.1,
     from: "start",
    },
    scrollTrigger: {
      containerAnimation: containerContext.data[0],
      trigger: contactForm_container.current,

      toggleActions: "play none none reverse"
    }
  });
},contactForm_container.current)


//-----------------------Contact Context----------------------------------------------//
    return () => {
      contactFormContext.revert();
      portfolioContext.revert();
      containerContext.revert();
      headerContext.revert();
    }

    

  },[])
//------------------------------GSAP---------------------------------------//


  return (
    
    <div className="App">
      <div id="body">
        <Header button1={scrollToHome} button2={scrollToPortfolio} button3= {scrollToContact} reference = {header_container}/>
        <section className="scroll">
          <div className="container" id="container" ref={container}>
            <Panel className={"panel one"} id="about" content={<About reference={about_container}/>}/>
            <Panel className={"panel two"}id="portfolio" content={<Portfolio reference={portfolio_container}/>}/>
            <Panel className={"panel three"} id="contact-form" content={<ContactForm reference={contactForm_container}/>}/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;


