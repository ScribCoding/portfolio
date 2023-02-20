

const DisplayButton = ({className, id, contentType, content}) =>{ 
    
   
    function buttonFunction(contentType){
        
        if(contentType === "portfolio"){
            
            let portfolioList = document.getElementById(`portfolio-list-${content}`)
            console.log(portfolioList)
            if(portfolioList.classList.contains("hidden")){
                portfolioList.classList.toggle("hidden")
                portfolioList.classList.toggle("visible")



            }
        } else if(contentType === "email") {
            let emailContainer = document.getElementById("email-container")
            if(emailContainer.classList.contains("hidden")){
                emailContainer.classList.toggle("hidden")
                emailContainer.classList.toggle("visible")
            }
        }
}

    return(
    <button className={`display-button ${className}`} id={id} onClick={()=>{buttonFunction(contentType)}}>

    </button>
    )
    }
    
    export default DisplayButton;