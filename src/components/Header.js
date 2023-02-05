const Header = ({button1,button2,button3,reference}) =>{




    
    return(
        <header className="header-container" ref={reference}>

          
          <button onClick={button1}>
            <div className="progress-circle"></div>
          </button>
          <button onClick={button2}></button>
          <button onClick={button3}></button>
        </header>
    )
}

export default Header;