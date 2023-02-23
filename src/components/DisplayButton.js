

const DisplayButton = ({className, id, contentType, content}) =>{ 
    
   
    function buttonFunction(contentType){
        
        if(contentType === "portfolio"){
            let portfolioList = document.querySelectorAll(`.portfolio-list-${content}`)
            console.log(portfolioList)
            portfolioList.forEach(element =>{
                console.log(element)
                if(element.classList.contains("hidden")){
                    element.classList.toggle("hidden")
                    element.classList.toggle("visible")
                }
            })
        } else if(contentType === "email") {
            let emailContainerTest = document.querySelectorAll(".email-container")

            emailContainerTest.forEach(element => {
                if(element.classList.contains("hidden")){
                    element.classList.toggle("hidden")
                    element.classList.toggle("visible")
                }
            });
        }
}

    return(
    <button className={`display-button ${className}`} id={id} onClick={()=>{buttonFunction(contentType)}}>

    </button>
    )
    }
    
    export default DisplayButton;