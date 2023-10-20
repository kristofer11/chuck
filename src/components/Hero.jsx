// import HeroImg from '../assets/IMG_2532.png'
import HeroImg from '../assets/images/Headshot.png';
import Sign from '../assets/images/Chuck for Schoolboard 2023.png'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hero-section">
                <div className="hero-container">
                    <div className='hero-text'>
                        <img src={Sign} alt="Sign reading Re-Elect Chuck Whitfield for School Board - Monroe - District 2" />
                        <h1 className='d-none d-md-block'>Experience, Commitment, Community</h1>

                    </div>
                    <img className='hero-img' src={HeroImg} alt="Portrait of Chuck Whitfield, candidate for Monroe School Board Director, district 2" />
                </div>
            </section>
        </motion.div>
    )
}

export default Hero