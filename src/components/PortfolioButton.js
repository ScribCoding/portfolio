const PortfolioButton = ({className, id}) =>{ 
    
    
    let buttonFunction = () =>{
        let portfolioList = document.getElementById("portfolio-list-container")
        if(portfolioList.classList.contains("hidden")){
            portfolioList.classList.toggle("hidden")
            portfolioList.classList.toggle("visible")
        }

    }

    return(
    <button className={`portfolio-button ${className}`} id={id} onClick={buttonFunction}>

    </button>
    )
    }
    
    export default PortfolioButton;