import Ocean from '../assets/images/oceanSquare.png'
import OceanLong from '../assets/images/IMG_7382.jpg'
import Headshot from '../assets/images/mainPortrait.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutChuck = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
    })
    const [ref2, inView2] = useInView({
        triggerOnce: true,
    })
    const [ref3, inView3] = useInView({
        triggerOnce: true,
    })
    const [ref4, inView4] = useInView({
        triggerOnce: true,
    })
    const [ref5, inView5] = useInView({
        triggerOnce: true,
    })
    const [ref6, inView6] = useInView({
        triggerOnce: true,
    })
    const [ref7, inView7] = useInView({
        triggerOnce: true,
    })
    const [ref8, inView8] = useInView({
        triggerOnce: true,
    })
    const [ref9, inView9] = useInView({
        triggerOnce: true,
    })
    const [ref10, inView10] = useInView({
        triggerOnce: true,
    })

    return (
        <section className="about-chuck">
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref1}
            >
                <h2>Meet Chuck Whitfield</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref2}
            >
                <div className="about-chuck-img-small d-block d-lg-none">
                    <img src={OceanLong} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
                </div>
            </motion.div>

            <div className="about-chuck-text">
                <div className='d-flex about-chuck-text-block-1'>
                    <div className="about-chuck-img d-none d-lg-flex">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView3 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            ref={ref3}
                        >
                            <img src={Ocean} alt="Chuck and Nancy Whitfield at the Oregon coast with waves in background." />
                        </motion.div>
                    </div>
                    <div>
                        {/* <p>I've lived in Monroe my entire life. I graduated from Monroe High School, enlisted into the Army, graduated from college with a business degree and currently operate a vehicle-licensing agency in Monroe. Through these stages of life I have learned how to be a leader who leads by example.</p>
                        <p>Over the last four years it has been my pleasure to serve as board director during some difficult times. During these hard times we worked together overcoming hardships and finding solutions to move forward. I've served on the curriculum committee, encouraging community input and choosing robust curriculum, and as the legislative representative, building relationships with lawmakers and advocating for our students.</p> */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView4 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            ref={ref4}
                        >
                            <p className='about-para'>
                                As a husband (39 years), father, and longtime resident of Monroe, I bring a history of community involvement and a solid commitment to our cherished city.
                            </p>
                        </motion.div>
                        <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView5 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref5}
                >
                        <p className='about-para'>
                            My roots in this community run deep, having been born and raised in Monroe. My journey began at Monroe High School, where I laid the foundation for my future. Following graduation, I served our country with honor in the U.S. Army, gaining invaluable life experiences.
                        </p>
                            </motion.div>
                    </div>
                </div>
                <div className='main-text'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView6 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref6}
                >
                    <p className='about-para mt-3 mt-md-0'>
                        My educational pursuits led me to attain a business degree, and today, I operate a local vehicle-licensing agency in Monroe. However, beyond my professional endeavors, my heart has always been dedicated to the betterment of our beloved city.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView7 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref7}
                >
                    <p className='about-para'>
                        Over the past four years, I've had the privilege of serving as a Monroe School District School Board Director. During this time, I've navigated the district through challenging moments, working collaboratively with my fellow board members and educators. My participation in the curriculum committee has allowed me to foster community input and help select robust educational programs. As the legislative representative, I've built meaningful relationships with lawmakers, advocating for the benefit of Monroe's students.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView8 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref8}
                >
                    <p className='about-para'>
                        My vision for our community extends beyond the classroom. I'm a member of the Monroe Rotary and the Monroe Chamber of Commerce, engaged in our faith-based community. My service record includes past presidencies of the Snohomish Rotary and Duvall Chamber, demonstrating my commitment to strengthening the social fabric of our city.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView9 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref9}
                >
                    <p className='about-para'>
                        My values, my commitment to education, and my community service have led me to pursue a role on the Monroe School Board. I welcome your questions, feedback, and support. Please don't hesitate to reach out via email, and if you're interested in supporting my campaign, your contribution will be genuinely appreciated. Together, we can shape a brighter future for Monroe's students and our entire community.
                    </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView10 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref10}
                >
                    <div className='family-link-div mt-4'>
                        <Link to='/whitfield-family' ><div className='w-family-link' id='w-family-link'><em>Read more about the Whitfield family legcacy in Monroe</em></div></Link>
                    </div>
                    </motion.div>
                </div>
                {/* <div className='d-flex about-chuck-text-2 align-items-center'>
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
                </div> */}

                {/* MOVED TO HOME PAGE */}

                {/* <p className="last-sentence"><strong>I will continue to serve our students, staff and community fairly and equitably, ensuring everyone has a seat at the table, while keeping student wellness and educational success at the forefront of all my decisions.</strong></p> */}
            </div>
        </section>
    )
}

export default AboutChuck