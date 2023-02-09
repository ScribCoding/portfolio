const ContactForm = ({reference}) =>{

    return(
        <section className="contact-form_container" ref={reference}>
            <article>
                <h1>Contact Form</h1>
                <form action="https://formsubmit.co/arshaaqj@gmail.com" method="POST" className="contact-form_input">
                    
                    <textarea className="form text" name="message" id="textarea" rows="10" placeholder="Please include name and/or company!" required></textarea>
                    
                    <span className="input-button-container">
                        <span className="input-container">
                        <input className="form input" type="text" name="name" placeholder="Full Name" required/>
                        <input className="form input" type="email"  id="email" name="email" placeholder="Email Address" required/>
                        </span>

                        <button type="submit">Send contact</button>
                    </span>

                    <input type="hidden" name="_subject" value="New submission!"></input>
                    <input type="hidden" name="_captcha" value="true"></input>


                </form>
            </article>
        </section>
    )
}

export default ContactForm;