import './styles/stylesheet.css'
import {gsap} from "gsap";

function App() {
  return (
    
    <div className="App">
            <body id="body">
        <header class="header-container">

          
          <button onclick="scrollToHome()">
            <div class="progress-circle"></div>
          </button>
          <button onclick="scrollToPortfolio()"></button>
          <button onclick="scrollToContact()"></button>
        </header>
        <section class="scroll">
          <div class="container" id="container">
            <section class="panel one" id="one"></section>
            <section class="panel two"></section>
            <section class="panel three" id="three"></section>
          </div>
        </section>


        

      <script src="javascript.js">
      </script>
      </body>
    </div>
  );
}

export default App;

//GSAP------------------------------------------------
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let sections = gsap.utils.toArray(".panel");
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
    scrollTrigger: {
    trigger: ".container",
    pin: true,
    pinspacing: false,
    scrub: 0.5,
    // snap: {
    //   snapTo: 1 / 2, 
    //   duration: 0.5,
    //   directional: false,
    //   ease: "power3",
      
    // },
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

let progressBarLength = window.innerWidth*0.9;
console.log(progressBarLength);
let progressBar = gsap.to(".progress-circle", {
  
  x: progressBarLength,
  ease: "none",
  scrollTrigger: {
    markers: true,
    trigger: ".container",
    scrub: true,
    start: "100 center",
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});





const scrollToHome = () =>{
  let container = document.getElementById("container")
  gsap.to(window,{duration: 1, scrollTo:
  {y: container.offsetWidth*0}})
}
const scrollToPortfolio = () =>{
  let container = document.getElementById("container")
  gsap.to(window,{duration: 1, scrollTo:
  {y: container.offsetWidth/2}})
  
}
const scrollToContact = () =>{
  let container = document.getElementById("container")
  gsap.to(window,{duration: 1, scrollTo:
  {y: container.offsetWidth}})
  
}
