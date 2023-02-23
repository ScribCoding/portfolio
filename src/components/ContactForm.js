import DisplayButton from "./DisplayButton";



const ContactForm = ({reference}) =>{

    let exitButton = () =>{
        
        let emailContainerTest = document.querySelectorAll(".email-container")

            emailContainerTest.forEach(element => {
                if(element.classList.contains("visible")){
                    element.classList.toggle("visible")
                    element.classList.toggle("hidden")       
                }
            });
    }

    return(
        <section className="contact-form_container" ref={reference}>

            <div className="email-container hidden" id="email-container">

                <div className="email-box">
                    <header className="email-header">
                    <h1>New Message</h1>
                    <button className="contact-header-exit-button" id="contact-header-exit-button" onClick={exitButton}></button>
                    </header>
                    <div className="email-content">
                        <form action="https://formsubmit.co/arshaaqj@gmail.com" method="POST" className="contact-form_input">
                                
                                <span className="input-container">
                                    <div className="input-subject">
                                        <h1>subject:</h1>
                                        <input className="form input" type="text" name="subject" placeholder="" required/>
                                    </div>
                                    
                                    <div className="input-email">
                                        <h1>email:</h1>
                                        <input className="form input" type="email"  id="email" name="email" placeholder="" required/>
                                    </div>
                                </span>
                                <textarea className="form text" name="message" id="textarea" rows="10" placeholder="Please include name and/or company!" required></textarea>

                                <button type="submit" className="send-button">send</button>


                                <input type="hidden" name="_subject" value="New submission!"></input>
                                <input type="hidden" name="_captcha" value="true"></input>


                        </form>
                    </div>
                </div>

                <div className="contact-form-background"></div>
            </div>
            
            <DisplayButton className="email-button" id="email-button-mobile" contentType="email"/>

            <div className="background-text-container">
                <svg className="contact-text-container">
                    <text className="sub-text" x="0" y="100%" fill="" stroke="#000000" strokeWidth="2">
                <tspan className="tp contact">contact</tspan>
                    </text>
                </svg>

                <svg className="form-text-container">
                    <text className="sub-text" x="0" y="100%" fill="" stroke="#000000" strokeWidth="2">
                <tspan className="tp form">form</tspan>
                    </text>
                </svg>
            </div>

           
        </section>
    )
}

export default ContactForm;