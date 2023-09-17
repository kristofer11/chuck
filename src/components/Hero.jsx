// import HeroImg from '../assets/IMG_2532.png'
import HeroImg from '../assets/images/Headshot.png';
import Sign from '../assets/images/Chuck for Schoolboard 2023.png'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className='hero-text'>
                        <img src={Sign} alt="Sign reading Re-Elect Chuck Whitfield for School Board - Monroe - District 2" />
                        <h1 className='d-none d-md-block'>Experience, Commitment, Community</h1>

                </div>
                <img className='hero-img me-lg-4 pe-lg-2' src={HeroImg} alt="Portrait of Chuck Whitfield, candidate for Monroe School Board Director, district 2" />
            </div>


        </section>
    )
}

export default Hero