import FbLogo from '../assets/images/5296499_fb_facebook_facebook logo_icon.png';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const handleNavigation = (id) => {
        const button = document.getElementById(id)
        button.addEventListener('click', () => window.location.href = '/')
    }

    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    // })

    return (
        // <motion.div
        //     initial={{ opacity: 0 }}
        //     animate={inView ? { opacity: 1 } : {}}
        //     transition={{ duration: 0.5 }}
        //     ref={ref}
        // >
            <footer className='footer'>
                <div className='copyright-div'>
                    <a className='d-block d-md-none' href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank">
                        <img src={FbLogo} className='fb-logo-sm' />
                    </a>
                    <div className='email-div d-flex gap-2 align-items-center'>

                        <div>Email: </div>
                        <div><a href="mailto:whitfieldforeducation@gmail.com">WhitfieldForEducation@gmail.com</a></div>
                    </div>
                    {/* <span className='d-none d-md-block'>|</span> */}
                    <div className='copyright'>©2023 paid for by Chuck Whitfield</div>
                    <a className='d-none d-md-block' href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank">
                        <img src={FbLogo} className='fb-logo' />
                    </a>
                </div>

            </footer>
        // </motion.div>
    )
}

export default Footer