import PortfolioButton from "./PortfolioButton";
import PortfolioList from "./PortfolioList";
import PortfolioDataItem from "./PortfolioDataItem";

const Portfolio = ({reference, data}) =>{

    console.log(data)
    let dataArrayElements = data.map((item, index)=>{
        let baseUrl = `https://scribcoding.github.io/${item.name}/`
        return (
            <PortfolioDataItem 
            key={index} 
            name={item.name} 
            pagesURL={baseUrl} 
            sourceURL={item.svn_url} 
            description={item.description}
            />
            )
    });



    return(
        <section className="portfolio-container" ref={reference}>
            <PortfolioList content={dataArrayElements}/>

            <div className="portfolio-items">
                <PortfolioButton className="javascript" id="javascript"/>
                <PortfolioButton className="css" id="css"/>
                <PortfolioButton className="general" id="general"/>
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