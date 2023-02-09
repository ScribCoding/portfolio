const Header = ({button1,button2,button3,reference,reference2}) =>{




    
    return(
        <header className="header-container" ref={reference}>
          <div className="progress-container">
            <button onClick={button1} ref={reference2}>
              <div className="progress-circle"></div>
            </button>
            <button onClick={button2}></button>
            <button onClick={button3}></button>
          </div>
          

        </header>
    )
}

export default Header;