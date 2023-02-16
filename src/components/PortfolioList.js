

const PortfolioList = ({content}) =>{ 



    return(
    <div className="portfolio-list-container hidden" id="portfolio-list-container">
       
       
       <div className="portfolio-list">
         {content}
       </div>
       <div className="portfolio-list-background"></div>
    </div>
    )
    }
    
    export default PortfolioList;