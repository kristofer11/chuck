// import HeroImg from '../assets/IMG_2532.png'
import HeroImg from '../assets/Headshot.png';
import Sign from '../assets/Chuck for Schoolboard 2023.png'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className='hero-text'>
                        {/* <h1>Experience</h1> 
                        <h1 className='commitment'>Commitment</h1>
                        <h1>Community</h1> */}
                        <img src={Sign} alt="Sign reading Re-Elect Chuck Whitfield for School Board - Monroe - District 2" />
                        <h1>Experience, Commitment, Community</h1>

                </div>
                <img className='hero-img' src={HeroImg} alt="Portrait of Chuck Whitfield, candidate for Monroe School Board Director, district 2" />
            </div>


        </section>
    )
}

export default Hero