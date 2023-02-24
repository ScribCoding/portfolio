

const PortfolioList = ({content, id, heading}) =>{ 

  let exitButton = () =>{
    let portfolioLists = document.querySelectorAll(".portfolio-list-container")
    
    for(let index in portfolioLists){
      try{
        if(portfolioLists[index].classList.contains("visible")){
          portfolioLists[index].classList.toggle("visible")
          portfolioLists[index].classList.toggle("hidden")
        }
    } catch{
     
    }

    }


    
}

    return(
    <div className={`portfolio-list-container  hidden ${id}`} id={id}>
       
       
       <div className="portfolio-list">
        <header className="portfolio-list-header">

        <h1>{heading}</h1>
        <button className="portfolio-header-exit-button" id="portfolio-header-exit-button" onClick={exitButton}></button>
        </header>
        <div className="portfolio-list-content">
          {content}
        </div>
       </div>
       <div className="portfolio-list-background"></div>
    </div>
    )
    }
    
    export default PortfolioList;