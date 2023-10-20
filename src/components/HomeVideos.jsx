import Video from './Video'
import FeaturedVideo from './FeaturedVideo'
import '../styles/homeVideos.scss'

const HomeVideos = () => {
    return (
        <div className='home-videos flex-md-row'>
            <div className='video-card'>
                <h2 className='video-title'>Community Engagement</h2>
                <Video source={"https://www.youtube.com/embed/B8TcQSWgru0?si=Wf-ibtMDsfMAeEjy"} />
            </div>
            <div className="video-card">
                <h2 className='video-title'>Emphasis on Safety</h2>
                <Video source={"https://www.youtube.com/embed/ZkDXwOKtSBc?si=7Eww5ulDR3vWFoPv"} />
            </div>
            <div className="video-card">
                <h2 className='video-title'>Accountability</h2>
                <Video source={"https://www.youtube.com/embed/jLeVehPhct8?si=MqdoVI1FMuN8_6vw"} />
            </div>
            {/* <h2 className='video-title'>Accomplishments as a Director</h2>
        <Video source={"https://www.youtube.com/embed/FYsSjiyX0T4?si=AMXqWz8KdR5q0I2Q"} />  */}
        </div>
    )
}

export default HomeVideos