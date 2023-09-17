import Ocean from '../assets/images/oceanSquare.png'
import OceanLong from '../assets/images/IMG_7382.jpg'
import Headshot from '../assets/images/mainPortrait.jpg';
import { Link } from 'react-router-dom';

const AboutChuck = () => {
    return (
        <section className="about-chuck">
            <h2>Meet Chuck Whitfield</h2>
            <div className="about-chuck-img-small d-block d-lg-none">
                <img src={OceanLong} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
            </div>

            <div className="about-chuck-text">
                <div className='d-flex about-chuck-text-block-1'>
                    <div className="about-chuck-img d-none d-lg-flex">
                        <img src={Ocean} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
                    </div>
                    <div>
                        {/* <p>I've lived in Monroe my entire life. I graduated from Monroe High School, enlisted into the Army, graduated from college with a business degree and currently operate a vehicle-licensing agency in Monroe. Through these stages of life I have learned how to be a leader who leads by example.</p>
                        <p>Over the last four years it has been my pleasure to serve as board director during some difficult times. During these hard times we worked together overcoming hardships and finding solutions to move forward. I've served on the curriculum committee, encouraging community input and choosing robust curriculum, and as the legislative representative, building relationships with lawmakers and advocating for our students.</p> */}
                        <p>
                            As a devoted husband, father, and proud longtime resident of Monroe, I bring a rich history of community involvement and an unwavering commitment to our cherished city.
                        </p>
                        <p>
                            My roots in this vibrant Pacific Northwest community run deep, having been born and raised right here in Monroe. I don't simply reside in Monroe; I am a living testament to the enduring spirit that defines this place. My journey began at Monroe High School, where I laid the foundation for my future. Following graduation, I proudly served our country with honor in the U.S. Army, gaining invaluable life experiences.
                        </p>

                    </div>
                </div>
                <div>
                <p>
                            My educational pursuits led me to attain a business degree, and today, I proudly operate a local vehicle-licensing agency in Monroe. However, beyond my professional endeavors, my heart has always been dedicated to the betterment of our beloved city.
                        </p>
                    <p>
                        Over the past four years, I've had the distinct privilege of serving as a Monroe School District School Board Director. During this time, I've navigated the district through challenging moments, working collaboratively with my fellow board members and educators. My active participation in the curriculum committee has allowed me to foster community input and help select robust educational programs. As the legislative representative, I've forged meaningful relationships with lawmakers, advocating tirelessly for the benefit of Monroe's students.
                    </p>
                    <p>
                        My vision for our community extends beyond the classroom. I'm a dedicated member of the Monroe Rotary and the Monroe Chamber of Commerce, deeply engaged in our faith-based community. My extensive service record includes past presidencies of the Snohomish Rotary and Duvall Chamber, demonstrating my steadfast commitment to strengthening the social fabric of our city.
                    </p>
                    <p>
                        My values, my dedication to education, and my tireless community service have led me to pursue a role on the Monroe School Board. I welcome your questions, feedback, and support. Please don't hesitate to reach out via email, and if you're interested in supporting my campaign, your contribution will be genuinely appreciated. Together, we can shape a brighter future for Monroe's students and our entire community.
                    </p>
                    <div className='family-link-div'>
                        <Link to='/whitfield-family' ><div className='w-family-link' id='w-family-link' ><em>Read more about the Whitfield family legcacy in Monroe</em></div></Link>
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
                    <img className='about-chuck-img-2 d-lg-block d-none' src={Headshot} alt="Chuck Whitfield, Monroe School District School Board Director" />
                </div>

                {/* MOVED TO HOME PAGE */}

                {/* <p className="last-sentence"><strong>I will continue to serve our students, staff and community fairly and equitably, ensuring everyone has a seat at the table, while keeping student wellness and educational success at the forefront of all my decisions.</strong></p> */}
            </div>
        </section>
    )
}

export default AboutChuck