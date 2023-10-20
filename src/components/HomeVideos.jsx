import Video from './Video'
import FeaturedVideo from './FeaturedVideo'
import '../styles/homeVideos.scss'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeVideos = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <div className='home-videos flex-md-row'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
            <div className='video-card'>
                <h2 className='video-title'>Community Engagement</h2>
                <Video source={"https://www.youtube.com/embed/B8TcQSWgru0?si=Wf-ibtMDsfMAeEjy"} />
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
                <div className="video-card">
                    <h2 className='video-title'>Emphasis on Safety</h2>
                    <Video source={"https://www.youtube.com/embed/ZkDXwOKtSBc?si=7Eww5ulDR3vWFoPv"} />
                </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref}
                >
                    <div className="video-card">
                        <h2 className='video-title'>Accountability</h2>
                        <Video source={"https://www.youtube.com/embed/jLeVehPhct8?si=MqdoVI1FMuN8_6vw"} />
                    </div>
                    </motion.div>
                    {/* <h2 className='video-title'>Accomplishments as a Director</h2>
        <Video source={"https://www.youtube.com/embed/FYsSjiyX0T4?si=AMXqWz8KdR5q0I2Q"} />  */}
                </div>
                )
}

                export default HomeVideos