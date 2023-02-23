const About = ({reference}) =>{
    return(
        <section className="about-name background-text-container" ref={reference}>

            
   
        <svg className="hi-text-container">
            <text className="sub-text" x="0" y="100%" fill="#fff" stroke="#000000" strokeWidth="2">
          <tspan className="tp hi">h</tspan>
          <tspan className="tp hi">i</tspan>
            </text>
        </svg>

        <svg className="name-text-container">
            <text className="main-text" textAnchor="middle" x="50%" y="110" fill="#000000" stroke="#000000" strokeWidth="2">
          <tspan className="tp name">Arshaaq</tspan>
            </text>
            
        </svg>

        <svg className="im-text-container">
            <text className="sub-text" x="0" y="100%" fill="#fff" stroke="#000000" strokeWidth="2">
          <tspan className="tp im">i'm</tspan>
            </text>
        </svg>


        </section>
)
}

export default About;