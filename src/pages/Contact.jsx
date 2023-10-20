import Sign from '../assets/images/Chuck for Schoolboard 2023.png';
import Headshot from '../assets/images/hero.jpg';
import HomeImages from '../components/HomeImages'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
        <section className="contact-section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref1}
            >
                <h2 className="section-heading">Connect with Chuck Whitfield</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView2 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref2}
            >
                <div style={{ width: '100%', backgroundColor: '#005EB0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="contact-text-1">
                        <img src={Headshot} className='contact-headshot' />
                        <p className='contact-text-p-1'>We value your input! Your feedback is important in shaping the future of our community's education, so Chuck welcomes your thoughts, concerns, and questions. Feel free to send an <a className='email-link' href='mailto:whitfieldforeducation@gmail.com' >email</a> to <a className='email-link' href='mailto:whitfieldforeducation@gmail.com' >WhitfieldForEducation@gmail.com</a></p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView3 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref3}
            >
                <HomeImages />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView4 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref4}
            >
                <h2 className='section-heading contact-section-2-heading'>Support the Campaign</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView1 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref1}
            >
                <div className='contact-text'>
                    <div>
                        <p>
                            Your support is greatly appreciated! To make a contribution and help us further our mission, you can click the donate button, which will take you to our PayPal page.

                        </p>
                        <p><em style={{ color: 'black' }}>Please note that we are required to collect the name, address and occupation of all donors. Thank you for your understanding.</em></p>
                        {/* <p>
                    Your generosity fuels our campaign and makes a significant impact on our community. We extend our heartfelt gratitude for considering contributing to our cause.
                </p>                     */}
                    </div>


                    <img className='d-none d-lg-block' src={Sign} />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView6 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref6}
            >
                <div className='family-link-div my-4 mb-5'>
                    <a href="https://secure.anedot.com/whitfieldforeducation/donate" ><div className='w-family-link'><em>Make a contribution</em></div></a>
                </div>
            </motion.div>

            {/* <div className='contact-sign-div d-block d-lg-none'>
                <img src={Sign} className='contact-sign' />
                </div> */}

        </section>
    )
}

export default Contact