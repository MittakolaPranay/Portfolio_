import SecondaryHeading from "../SecondaryHeading/SecondaryHeading";
import "./Contact.css"

function Contact() {
    return <div id="contact" className="app__bg section__padding">
        <div className="app__divider contact__divider"></div>
        <div className="app__wrapper">
            <div className="app__wrapper_heading">
                <SecondaryHeading heading={"Let’s connect"} para={`Say hello at mittakolap@gmail.com. <br />For more info, here's my <a href = "https://pranay72.netlify.app/Mittakola_Pranay_Resume.pdf" target="_blank" rel="noopener noreferrer" class = "a__link">Resume</a>`}/>
            </div>
            <div className="app__wrapper_info">
                <form action="" className="contact__form">
                    <div className="app__input_field">
                        <label htmlFor="name" className="p__manrope">Name</label>
                        <input type="text" id="name"/>
                    </div>

                    <div className="app__input_field">
                        <label htmlFor="email" className="p__manrope">Email</label>
                        <input type="email" id="email"/>
                    </div>

                    <div className="app__input_field">
                        <label htmlFor="subject" className="p__manrope">Subject</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="app__input_field">
                        <label htmlFor="message" className="p__manrope">Message</label>
                        <textarea name="" id="message"></textarea>
                    </div>

                    <button className="custom__button contact__btn">SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact;