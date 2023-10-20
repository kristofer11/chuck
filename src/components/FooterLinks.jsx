import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FooterLinks = () => {
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
        <div className="footer-nav-container">
            <nav className='footer-nav'>

                <Link to='/'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView1 ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        ref={ref1}
                    >
                        <div className='footer-link'>Home</div>
                    </motion.div>
                </Link>



                <Link to='/about'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        ref={ref2}
                    >
                        <div className='footer-link'>About Chuck</div>
                    </motion.div>
                </Link>

                <Link to='/endorsements'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView3 ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        ref={ref3}
                    >
                        <div className='footer-link'>Endorsements</div>
                    </motion.div>
                </Link>



                    <Link to='/contact'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView4 ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref4}
                >
                        <div className='footer-link'>Contact</div>
                </motion.div>
                    </Link>


                {/* <Link to="https://www.paypal.com/donate/?hosted_button_id=R3VRYUX2FKVHE">
                    <div className='footer-link'>Donate</div>
                </Link> */}
            </nav>
        </div>
    )
}

export default FooterLinks