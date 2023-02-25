import Header from './Header';
import Panel from './Panel';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import About from './About';


import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLayoutEffect, useRef, useState } from 'react';



const OverallScroll = () =>{

const [dataArray, setDataArray] = useState([])

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
  async function getData(){
    let data = await (await fetch("https://api.github.com/users/ScribCoding/repos")).json()
    
    setDataArray(data);
  }
  getData();

document.querySelector(".about_button").addEventListener("click",scrollToHome);
document.querySelector(".portfolio_button").addEventListener("click",scrollToPortfolio);
document.querySelector(".contactForm_button").addEventListener("click",scrollToContact);
//--------------header button events-------------------------//

let scrollDownAnim = gsap.timeline({
})

scrollDownAnim
.from(".scroll-down-container",  {y:"100", opacity: 0}, "-=1")
.to(".scroll-down-container",  {y:"0", opacity: 1})

let hiImAnim = gsap.timeline();
hiImAnim
.to(".hi",  {strokeDashoffset:"0", duration: "0.5"}, )
.to(".hi",  {strokeDashoffset:"-800", delay:"0.5"}, )
.to(".im",  {strokeDashoffset:"0", duration: "0.5"}, )
.to(".im",  {strokeDashoffset:"-1000", delay:"0.5"}, )
.to(".name",  {strokeDashoffset:"0", duration: "3"} )
.to(".name",  { fillOpacity: 1, strokeOpacity: 0},"-=2" )
.add(scrollDownAnim,"-=1")



//-----------------gsap about animations-------------------------------//

  
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
    
    let buttonOne = document.querySelector(".about_button")
    let buttonOneIcon = header_container.current.children[0].children[1].children[0]
    let buttonTwo = document.querySelector(".portfolio_button")
    let buttonThree = document.querySelector(".contactForm_button")

    let navEnd = buttonThree.getBoundingClientRect().left - buttonOne.getBoundingClientRect().left - buttonThree.getBoundingClientRect().width/2;
    let progressBar = gsap.to(progressCircle, {
      onUpdate: function(){
        
      },

      x: navEnd,
      ease: "none",
        scrollTrigger: {

          invalidateOnRefresh: true,
          containerAnimation: containerContext.data[0],
          trigger: document.querySelector(".one"),
          scrub: true,
          start: `start start`,
          end: () => "+=" + container.current.offsetWidth*2/3
      }
    }); 

    window.addEventListener("resize", ()=>{
      if(window.body.offsetWidth !== undefined){
        //changes the progress length of the progress tracker
        progressBar.vars.x = buttonThree.getBoundingClientRect().left - buttonOne.getBoundingClientRect().left - buttonThree.getBoundingClientRect().width/2;
        
        //resets the progress to 0 so that overall container isn't affected by the window resize
        gsap.to(window,{duration: 0.2, scrollTo:
          {y: 0}})
          
      }
      
    });

  },header_container.current)

//-----------------------PROGRESS CIRCLE---------------------------------------//

let boxes = gsap.utils.toArray(portfolio_container.current.children[1].children);

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

let portfolioTextAnim = gsap.timeline(
  {     
    scrollTrigger: {
      containerAnimation: containerContext.data[0],
      trigger: portfolio_container.current,
      scrub: true,
      start: "-20% center",
      end: "center center",
    }
}
  );
portfolioTextAnim
.to(".previous",  {strokeDashoffset:"0", duration:"2" }, )
.to(".work",  {strokeDashoffset:"0", duration:"2" }, "<" )
.to(".previous",  {fillOpacity: 1, strokeOpacity: 0},)
.to(".work",  {fillOpacity: 1, strokeOpacity: 0}, "<" )
//background-text associated with portfolio panel

},portfolio_container.current)
//-----------------------Portfolio Context----------------------------------------------//



let contactFormContext = gsap.context(()=>{
let contactFormTextAnim = gsap.timeline(
  {     
    scrollTrigger: {
      containerAnimation: containerContext.data[0],
      trigger: contactForm_container.current,
      scrub: true,
      start: "-20% center",
      end: "center center",

    }
}
  );
contactFormTextAnim
.to(".contact",  {strokeDashoffset:"0", duration:"2" }, )
.to(".me",  {strokeDashoffset:"0", duration:"2" }, "<" )
.to(".contact",  {fillOpacity: 1, strokeOpacity: 0}, )
.to(".me",  {fillOpacity: 1, strokeOpacity: 0}, "<" )
//background-text associated with portfolio panel  



},contactForm_container.current)


//-----------------------Contact Context----------------------------------------------//
  return () => {

    contactFormContext.revert();
    portfolioContext.revert();
    containerContext.revert();
    headerContext.revert();
  }

  

},[])

return(
    <section className="scroll">
        <Header button1={scrollToHome} button2={scrollToPortfolio} button3= {scrollToContact} reference = {header_container}/>
          
          <div className="container" id="container" ref={container}>
            <Panel className={"panel one"} id="about" content={<About reference={about_container}/>}/>
            <Panel className={"panel two"}id="portfolio" content={<Portfolio reference={portfolio_container} data={dataArray}/>}/>
            <Panel className={"panel three"} id="contact-form" content={<ContactForm reference={contactForm_container}/>}/>
          </div>

        </section>
)



}

export default OverallScroll;