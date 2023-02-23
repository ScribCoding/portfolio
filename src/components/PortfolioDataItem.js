const PortfolioDataItem = (
    {
        name, 
        pagesURL, 
        sourceURL,
        description
    }) =>
    
    {
        return(
            <div className="portfolio-data-item">
                <div className="data-item-name">
                    <p>{name}</p>
                </div>

                <div className="data-item-description">
                    <p>{description}</p>
                </div>

                <div className="data-item-buttons">
                    <a href={pagesURL} target="_blank" rel="noreferrer">
                        <button className="webpage">
                            
                        </button>
                    </a>

                    <a href={sourceURL} target="_blank" rel="noreferrer">
                        <button className="source-code">
                            
                        </button>
                    </a>
                </div>
            
            </div>
        )
        } 

export default PortfolioDataItem;