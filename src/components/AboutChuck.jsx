import Ocean from '../assets/oceanSquare.png'
import OceanLong from '../assets/IMG_7382.jpg'
import Headshot from '../assets/mainPortrait.jpg'

const AboutChuck = () => {
    return (
        <section className="about-chuck">
            <h2>About Chuck</h2>
            <div className="about-chuck-img-small d-block d-lg-none">
                <img src={OceanLong} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
            </div>

            <div className="about-chuck-text">
                <div className='d-flex align-items-center'>
                    <div className="about-chuck-img d-none d-lg-block">
                        <img src={Ocean} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
                    </div>
                    <div>
                        <p>I've lived in Monroe my entire life. I graduated from Monroe High School, enlisted into the Army, graduated from college with a business degree and currently operate a vehicle-licensing agency in Monroe. Through these stages of life I have learned how to be a leader who leads by example.</p>
                        <p>Over the last four years it has been my pleasure to serve as board director during some difficult times. During these hard times we worked together overcoming hardships and finding solutions to move forward. I've served on the curriculum committee, encouraging community input and choosing robust curriculum, and as the legislative representative, building relationships with lawmakers and advocating for our students.</p>
                    </div>

                </div>

                <div className='d-flex about-chuck-text-2 align-items-center'>
                    <div className='commitment-card'>
                        <p><strong>I remain committed to the following:</strong></p>
                        <ul>
                            <li>Prioritizing the education of our students, collaborating with the community</li>
                            <li>Building partnerships and sharing ideas - ensuring teachers and staff are supported and equipped with tools they need to provide a quality education for every student</li>
                            <li>Partnering with parents/guardians in the education of their children</li>
                            <li>Continuing to be fiscally responsible with taxpayer dollars</li>
                        </ul>                        
                    </div>
                    <img className='about-chuck-img-2' src={Headshot} alt="" />
                </div>

                <p className="last-sentence"><strong>I will continue to serve our students, staff and community fairly and equitably, ensuring everyone has a seat at the table, while keeping student wellness and educational success at the forefront of all my decisions.</strong></p>
            </div>
        </section>
    )
}

export default AboutChuck