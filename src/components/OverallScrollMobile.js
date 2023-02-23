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

const about_container_mobile = useRef();
const portfolio_container_mobile = useRef();
const container_mobile = useRef();
const header_container_mobile = useRef();
const contactForm_container_mobile = useRef();

const scrollToHome = () =>{
  gsap.to(window,{duration: 1, scrollTo:
  {y: container_mobile.current.offsetWidth*0}})
}
const scrollToPortfolio = () =>{
  gsap.to(window,{duration: 1, scrollTo:
  {y: container_mobile.current.offsetWidth/2}})
  
}
const scrollToContact = () =>{
  gsap.to(window,{duration: 1, scrollTo:
  {y: container_mobile.current.offsetWidth}})
  
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

let hiImAnim = gsap.timeline();
hiImAnim
.to(".hi",  {strokeDashoffset:"0", duration: "0.5"}, )
.to(".hi",  {strokeDashoffset:"-800", delay:"0.5"}, )
.to(".im",  {strokeDashoffset:"0", duration: "0.5"}, )
.to(".im",  {strokeDashoffset:"-1000", delay:"0.5"}, )
.to(".name",  {strokeDashoffset:"0", duration: "3"} )
.to(".name",  { fillOpacity: 1, strokeOpacity: 0},"-=2" )

//-----------------gsap about animations-------------------------------//

  
  let sections = gsap.utils.toArray(container_mobile.current.children);


  let containerContextMobile = gsap.context(()=>{
    let scrollSections = gsap.to(sections, {

      yPercent: -100 * (sections.length - 1),
      ease: "none",
        scrollTrigger: {
            
            invalidateOnRefresh: true,
            trigger: container_mobile.current,
            pin: container_mobile.current,
            pinspacing: false,
            scrub: 0.5,
            
            
            
            
            
        }
    }); 
  },container_mobile.current)
    
//-----------------------MAIN CONTAINER ANIMATION---------------------------------------//
  let headerContext = gsap.context(()=>{
    let progressCircle = document.querySelector(".progress-circle");
    
    let buttonOne = header_container_mobile.current.children[0].children[0]
    let buttonOneIcon = header_container_mobile.current.children[0].children[1].children[0]
    let buttonTwo = header_container_mobile.current.children[0].children[1]
    let buttonThree = header_container_mobile.current.children[0].children[2]

    let navEnd = buttonThree.getBoundingClientRect().left - buttonOne.getBoundingClientRect().left - buttonThree.getBoundingClientRect().width/2;
    let progressBarMobile = gsap.to(progressCircle, {
      onUpdate: function(){
      },

      x: navEnd,
      ease: "none",
        scrollTrigger: {
        
          invalidateOnRefresh: true,
          
          scrub: true,
          start: `start start`,
          end: () => "+=" + container_mobile.current.offsetHeight
      }
    }); 

    window.addEventListener("resize", ()=>{
      if(window.body.offsetWidth !== undefined){
        //changes the progress length of the progress tracker
        progressBarMobile.vars.x = buttonThree.getBoundingClientRect().left - buttonOne.getBoundingClientRect().left - buttonThree.getBoundingClientRect().width/2;
        
        //resets the progress to 0 so that overall container isn't affected by the window resize
        gsap.to(window,{duration: 0.2, scrollTo:
          {y: 0}})
          
      }
      
    });

  },header_container_mobile.current)

//-----------------------PROGRESS CIRCLE---------------------------------------//

let boxes = gsap.utils.toArray(portfolio_container_mobile.current.children[0]);

let portfolioContext = gsap.context(()=>{


let portfolioTextAnim = gsap.timeline(
  {     
    scrollTrigger: {
      trigger: portfolio_container_mobile.current,
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

},portfolio_container_mobile.current)
//-----------------------Portfolio Context----------------------------------------------//



let contactFormContext = gsap.context(()=>{

let contactFormTextAnim = gsap.timeline(
  {     
    scrollTrigger: {
      trigger: contactForm_container_mobile.current,
      scrub: true,
      start: "-20% center",
      end: "center center",

    }
}
  );



contactFormTextAnim
.to(".contact",  {strokeDashoffset:"0", duration:"2" }, )
.to(".form",  {strokeDashoffset:"0", duration:"2" }, "<" )
.to(".contact",  {fillOpacity: 1, strokeOpacity: 0}, )
.to(".form",  {fillOpacity: 1, strokeOpacity: 0}, "<" )
//background-text associated with portfolio panel  



},contactForm_container_mobile.current)


//-----------------------Contact Context----------------------------------------------//
  return () => {

    contactFormContext.revert();
    portfolioContext.revert();
    containerContextMobile.revert();
    headerContext.revert();
  }

  

},[])

return(
    <section className="scroll-mobile">
        <Header button1={scrollToHome} button2={scrollToPortfolio} button3= {scrollToContact} reference = {header_container_mobile}/>
          
          <div className="container-mobile" id="container" ref={container_mobile}>
            <Panel className={"panel-mobile one"} id="about" content={<About reference={about_container_mobile}/>}/>
            <Panel className={"panel-mobile two"}id="portfolio" content={<Portfolio reference={portfolio_container_mobile} data={dataArray}/>}/>
            <Panel className={"panel-mobile three"} id="contact-form" content={<ContactForm reference={contactForm_container_mobile}/>}/>
          </div>

        </section>
)



}

export default OverallScroll;