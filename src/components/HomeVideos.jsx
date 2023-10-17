import Video from './Video'
import FeaturedVideo from './FeaturedVideo'
import '../styles/homeVideos.scss'

const HomeVideos = () => {
  return (
    <div className='home-videos'>
        <h2 className='video-title'>Emphasis on Safety</h2>
        <Video source={"https://www.youtube.com/embed/ZkDXwOKtSBc?si=7Eww5ulDR3vWFoPv"} />        
        <h2 className='video-title'>Community Engagement</h2>
        <Video source={"https://www.youtube.com/embed/B8TcQSWgru0?si=Wf-ibtMDsfMAeEjy"} />
    </div>
  )
}

export default HomeVideos