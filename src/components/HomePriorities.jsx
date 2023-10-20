import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePriorities = () => {
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

    return (

        <section className="home-priorities" id='#home-priorities' >
            <div className="home-priorities-text">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView1 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref1}
                >
                    <h2>Chuck's Priorities as School Board Director</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref2}
                >
                    <details>
                        <summary>Take responsibility for school district governance</summary>
                        <ul>
                            <li>Adopt policies based on best practices with the belief that all students can obtain high levels of achievement.</li>
                            <li> Work together as an effective team - board and Supterintendent.</li>
                            <li>Lead in the development of a vision that is supported by schools and community</li>
                        </ul>
                    </details>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView3 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref3}
                >
                    <details>
                        <summary>Hold district accountable for meeting student learning expectations</summary>
                        <ul>
                            <li>Set high expectations for student learning.</li>
                            <li> Belief that every student's learning can improve, regardless of circumstances.</li>
                            <li>Develop a district plan focused on learning outcomes for students.</li>
                            <li>Measure student progress basedon valid and reliableassessments.</li>
                        </ul>
                    </details>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref4}
                >
                    <details>
                        <summary>Create conditions for students and staff success</summary>
                        <ul>
                            <li>Support teachers and staff with professional development.</li>
                            <li> Provide for safety and security</li>
                            <li>Rigorous curriculum, technology & quality facilities.</li>
                            <li>Adopt an annual budget that allocates resources based on the district's goals and priorities.</li>
                        </ul>
                    </details>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView5 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref5}
                >
                    <details className="last-details">
                        <summary>Engage the community in education</summary>
                        <ul>
                            <li>Collaborate with families and
                                community members.</li>
                            <li> Ensure transparency through a process that
                                is open and accountable.</li>
                            <li>Solicit input from staff.</li>
                        </ul>
                    </details>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView6 ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                    ref={ref6}
                >
                    <p className="last-sentence"><strong>I will continue to serve our students, staff and community fairly and equitably, ensuring everyone has a seat at the table, while keeping student wellness and educational success at the forefront of all my decisions.</strong></p>
                </motion.div>
            </div>
        </section>
    )
}

export default HomePriorities