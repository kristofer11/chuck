import '../styles/homeVideos.scss'
import { motion } from 'framer-motion'

const FeaturedVideo = ({ source }) => {
    return (
        <motion.div
            initial={{ opacity: 0}} animate={{ opacity: 1}}
        >
            <div className='d-flex flex-column align-items-center featured-video-container'>
                <h2 className='home-title'>Meet Chuck Whitfield</h2>

                <iframe className='featured-video' src="https://www.youtube.com/embed/FYsSjiyX0T4?si=AMXqWz8KdR5q0I2Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
            </div>
        </motion.div>


    )
}

export default FeaturedVideo