import FbLogo from '../assets/5296499_fb_facebook_facebook logo_icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div>©2023 paid for by Chuck Whitfield</div>
        <a href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank">
           <img src={FbLogo} className='fb-logo'/>
        </a>
    </footer>
  )
}

export default Footer