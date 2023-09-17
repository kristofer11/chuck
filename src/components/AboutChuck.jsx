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
                            Chuck Whitfield, a devoted husband, father, and longtime Monroe resident, brings a rich history of community involvement and a deep commitment to the city he proudly calls home.
                        </p>
                        <p>
                            Born and raised in Monroe, Chuck's roots run deep in this vibrant Pacific Northwest community. He's not just a resident; he's a testament to the enduring spirit of Monroe. Chuck's journey began at Monroe High School, where he laid the foundation for his future. After graduation, he enlisted in the U.S. Army, serving our country with honor and gaining valuable life experience.
                        </p>
                        <p>
                            Chuck's educational pursuits led him to a business degree, and today, he operates a local vehicle-licensing agency in Monroe. Beyond his professional endeavors, Chuck's heart has always been devoted to the betterment of his beloved city.
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        Over the past four years, Chuck has had the privilege of serving as a Monroe School District School Board Director. During this time, he navigated the district through challenging moments, working collaboratively with fellow board members and educators. He actively participated in the curriculum committee, fostering community input to select robust educational programs. As the legislative representative, he forged relationships with lawmakers, advocating tirelessly for Monroe's students.
                    </p>
                    <p>
                        Chuck's vision extends beyond the classroom. He's a dedicated member of the Monroe Rotary and the Monroe Chamber of Commerce, deeply engaged in the faith-based community. His extensive service record includes past presidencies of the Snohomish Rotary and Duvall Chamber, demonstrating his commitment to strengthening the social fabric of his city.
                    </p>
                    <p>
                        Chuck's values, dedication to education, and tireless community service make him an ideal candidate for the Monroe School Board. Chuck welcomes questions, feedback, and support from the community. Feel free to reach out via email, and if you're interested in supporting his campaign, your contribution will be deeply appreciated.
                    </p>
                    <div className='family-link-div'>
                        <Link to='/whitfield-family' ><div className='w-family-link' id='w-family-link' >Read more about the Whitfield family legcacy in Monroe</div></Link>
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