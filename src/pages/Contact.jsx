import Sign from '../assets/Chuck for Schoolboard 2023.png';
import Headshot from '../assets/hero.jpg';
import FooterLinks from '../components/FooterLinks';


const Contact = () => {
    return (
        <section className="contact-section">
            <h2 className="section-heading">Connect with Chuck Whitfield</h2>
            <div style={{ width: '100%', backgroundColor: '#005EB0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="contact-text-1">
                    <img src={Headshot} className='contact-headshot' />
                    <p className='contact-text-p-1'>We value your input! Your feedback is important in shaping the future of our community's education, so Chuck welcomes your thoughts, concerns, and questions. Feel free to send an <a className='email-link' href='mailto:whitfieldforeducation@gmail.com' >email</a>! </p>
                </div>
            </div>


            <h2 className='section-heading'>Support the Campaign</h2>
            <div className='contact-text'>
                <p>
                    Your support is greatly appreciated! To make a contribution and help us further our mission, please reach out to us via <a className='email-link' href='mailto:whitfieldforeducation@gmail.com'  >email</a>. We'll be more than happy to provide you with the necessary guidance on how to donate. Your generosity fuels our campaign and makes a significant impact on our community. We extend our heartfelt gratitude for considering contributing to our cause.
                </p>
                <img className='d-none d-lg-block' src={Sign} />
            </div>
            <div className='contact-sign-div d-block d-lg-none'>
                <img src={Sign} className='contact-sign' />
            </div>
        </section>
    )
}

export default Contact