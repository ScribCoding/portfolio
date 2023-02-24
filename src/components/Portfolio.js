import DisplayButton from "./DisplayButton";
import PortfolioList from "./PortfolioList";
import PortfolioDataItem from "./PortfolioDataItem";

const Portfolio = ({reference, data}) =>{

    let dataGeneral = data;

    let dataCSS = data.filter((item,index)=>{
        return item.language === "CSS";
    })

    let dataJavascript = data.filter((item,index)=>{
        return item.language === "JavaScript";
    })


    let dataArrayElementsGeneral = dataGeneral.map((item, index)=>{
        let baseUrl = `https://scribcoding.github.io/${item.name}/`
        return (
            <PortfolioDataItem 
            key={index} 
            name={item.name} 
            pagesURL={baseUrl} 
            sourceURL={item.svn_url}
            description={item.description}
            language={item.language}
            />
            )
    });

    let dataArrayElementsCSS = dataCSS.map((item, index)=>{
        let baseUrl = `https://scribcoding.github.io/${item.name}/`
        return (
            <PortfolioDataItem 
            key={index} 
            name={item.name} 
            pagesURL={baseUrl} 
            sourceURL={item.svn_url} 
            description={item.description}
            language={item.language}
            />
            )
    });
    
    let dataArrayElementsJavascript = dataJavascript.map((item, index)=>{
        let baseUrl = `https://scribcoding.github.io/${item.name}/`
        return (
            <PortfolioDataItem 
            key={index} 
            name={item.name} 
            pagesURL={baseUrl} 
            sourceURL={item.svn_url} 
            description={item.description}
            language={item.language}
            />
            )
    });


    return(
        <section className="portfolio-container" ref={reference}>
            <PortfolioList content={dataArrayElementsGeneral} id="portfolio-list-general" heading={"General"}/>
            <PortfolioList content={dataArrayElementsCSS} id="portfolio-list-css" heading={"CSS"}/>
            <PortfolioList content={dataArrayElementsJavascript} id="portfolio-list-javascript" heading={"Javascript"}/>

            <div className="portfolio-items">
                <DisplayButton className="javascript" id="javascript" contentType={"portfolio"} content="javascript"/>
                <DisplayButton className="css" id="css" contentType={"portfolio"} content="css"/>
                <DisplayButton className="general" id="general" contentType={"portfolio"} content="general"/>
            </div>

            <div className="background-text-container">

                <svg className="previous-text-container">
                    <text className="sub-text" x="" y="100%" fill="" stroke="#000000" strokeWidth="2">
                        <tspan className="tp previous">previous</tspan>
                    </text>
                </svg>

                <svg className="work-text-container">
                    <text className="sub-text" x="" y="100%" fill="" stroke="#000000" strokeWidth="2">
                        <tspan className="tp work">work</tspan>
                    </text>
                </svg>

            </div>
        
        
        
        </section>
    )
}

export default Portfolio;