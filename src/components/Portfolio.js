const Portfolio = ({reference}) =>{
    return(
        <section className="portfolio-container" ref={reference}>
            
            <div className="portfolio-items">
                <div className="portfolio-item"></div>
                <div className="portfolio-item"></div>
                <div className="portfolio-item"></div>
            </div>

        <div className="background-text-container">

        <svg className="previous-text-container">
            <text className="sub-text" x="0" y="100%" fill="" stroke="#000000" strokeWidth="2">
          <tspan className="tp previous">previous</tspan>
            </text>
        </svg>

        <svg className="work-text-container">
            <text className="sub-text" x="0" y="100%" fill="" stroke="#000000" strokeWidth="2">
          <tspan className="tp work">work</tspan>
            </text>
        </svg>

        </div>
        
        
        
        </section>
    )
}

export default Portfolio;