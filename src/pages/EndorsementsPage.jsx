import Endorsements from "../components/Endorsements";
import Parade from '../assets/images/paradeCropped2.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EndorsementsPage = () => {
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

    return (
        <section className="endorsements-page-section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
                ref={ref1}
            >
                <h2 className="section-heading">Key Endorsements</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ duration: 1.25 }}
                ref={ref2}
            >
                <div className="endorsements-text">

                    <div style={{ width: '999px', maxWidth: '100%' }}>
                        <div className="endorsements-card">

                            <ul>
                                <li>
                                    <h4><span>☆</span> <strong>Kirk Pearson</strong>, <em>former State Senator 39th District</em></h4>
                                </li>
                                <li>
                                    <h4><span>☆</span> <strong>Nate Nehring</strong>, <em>Snohomish County Council</em></h4>
                                </li>
                                <li>
                                    <h4><span>☆</span> <strong>Jason Gamble</strong>, <em>Monroe City Council</em></h4>
                                </li>
                                <li>
                                    <h4><span>☆</span> <strong>Sam Low</strong>, <em>Snohomish County Council</em></h4>
                                </li>
                                <li>
                                    <h4><span>☆</span> <strong>Carolyn Eslick</strong>, <em>39th District Rep.</em></h4>
                                </li>
                            </ul>
                            <p><em>We're proud to be endorsed by a coalition of community leaders and advocates who share our vision for better education. Their support fuels our commitment to positive change in our schools. Thank you to our endorsers for joining us on this journey.</em></p>
                        </div>
                    </div>

                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1.33 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref3}
            >
                <img src={Parade} />
            </motion.div>
        </section>
    )
}

export default EndorsementsPage