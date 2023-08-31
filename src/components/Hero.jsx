// import HeroImg from '../assets/IMG_2532.png'
import HeroImg from '../assets/mainPortrait.jpg'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <img className='hero-img' src={HeroImg} alt="Portrait of Chuck Whitfield, candidate for Monroe School Board Director, district 2" />
                <div className='hero-text'>
                    <h1>Experience, Commitment, Community: Chuck Whitfield for Monroe Schools</h1>
                    <p>Over the last four years it has
                        been my pleasure to serve as board director during some difficult times.
                        During these hard times we worked together overcoming hardships and finding
                        solutions to move forward. I've served on curriculum committee, encouraging community input and choosing robust curriculum, and as the legislative representative, building relationships with lawmakers and advocating for our students.</p>
                </div>
            </div>

        </section>
    )
}

export default Hero