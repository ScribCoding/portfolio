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
                    <a href={pagesURL} target="_blank">
                        <button>
                            {name}
                        </button>
                    </a>

                    <a href={sourceURL} target="_blank">
                        <button>
                            {name}
                        </button>
                    </a>
                </div>
            
            </div>
        )
        } 

export default PortfolioDataItem;