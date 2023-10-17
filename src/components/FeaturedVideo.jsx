import '../styles/homeVideos.scss'

const FeaturedVideo = ({source}) => {
    return (
        <iframe className='featured-video' width="560" height="315" src='https://www.youtube.com/embed/B8TcQSWgru0?si=Wf-ibtMDsfMAeEjy' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
    )
}

export default FeaturedVideo