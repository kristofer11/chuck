import FbLogo from '../assets/5296499_fb_facebook_facebook logo_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleNavigation = (id) => {
        const button = document.getElementById(id)
        button.addEventListener('click', () => window.location.href= '/')
    }

    return (
        <footer className='footer'>            
            <div className='copyright-div'>
                <div className='email-div'>
                    Email: <a href="mailto:whitfieldforeducation@gmail.com">WhitfieldForEducation@gmail.com</a> 
                </div>
                {/* <span className='d-none d-md-block'>|</span> */}
                <div className='copyright'>©2023 paid for by Chuck Whitfield</div>
                <a href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank">
                    <img src={FbLogo} className='fb-logo' />
                </a>
            </div>

        </footer>
    )
}

export default Footer