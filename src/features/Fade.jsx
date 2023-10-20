import { motion } from 'framer-motion'

const Fade = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
        </motion.div>
    )
}

export default Fade