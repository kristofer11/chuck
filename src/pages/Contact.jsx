import Sign from '../assets/Chuck for Schoolboard 2023.png';
import Headshot from '../assets/hero.jpg';


const Contact = () => {
    return (
        <section className="contact-section">
            <h2 className="section-heading">Connect with Chuck Whitfield</h2>
            <div style={{ width: '100%', backgroundColor: '#005EB0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="contact-text-1">
                    <img src={Headshot} className='contact-headshot' />
                    <p className='contact-text-p-1'>We value your input! Your feedback is important in shaping the future of our community's education, so Chuck welcomes your thoughts, concerns, and questions. Feel free to reach out via email at <a className='email-link' href='mailto:whitfieldforeducation@gmail.com' >WhitfieldForEducation@gmail.com</a> </p>
                </div>
            </div>


            <h2 className='section-heading'>Support the Campaign</h2>
            <div className='contact-text'>
                <p>
                    Your support is greatly appreciated! To make a contribution and help us further our mission, please reach out to us via email at <a className='email-link' href='mailto:whitfieldforeducation@gmail.com'  >WhitfieldForEducation@gmail.com</a>. We'll be more than happy to provide you with the necessary guidance on how to donate. Your generosity fuels our campaign and makes a significant impact on our community. We extend our heartfelt gratitude for considering contributing to our cause. Together, we can make a positive change!
                </p>
            </div>
            <div className='contact-sign-div'>
                <img src={Sign} className='contact-sign' />
            </div>
        </section>
    )
}

export default Contact