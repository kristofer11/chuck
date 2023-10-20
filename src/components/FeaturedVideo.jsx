import '../styles/homeVideos.scss'

const FeaturedVideo = ({ source }) => {
    return (
        <div className='d-flex flex-column align-items-center featured-video-container'>
            <h2 className='home-title'>Meet Chuck Whitfield</h2>

            <iframe className='featured-video' src="https://www.youtube.com/embed/FYsSjiyX0T4?si=AMXqWz8KdR5q0I2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
        </div>

    )
}

export default FeaturedVideo