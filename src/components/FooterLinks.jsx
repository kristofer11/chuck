import { Link } from "react-router-dom"

const FooterLinks = () => {
    return (
        <div className="footer-nav-container">
            <nav className='footer-nav'>
                <Link to='/'>
                    <div className='footer-link'>Home</div>
                </Link>
                <Link to='/about'>
                    <div className='footer-link'>About Chuck</div>
                </Link>
                <Link to='/endorsements'>
                    <div className='footer-link'>Endorsements</div>
                </Link>
                <Link to='/contact'>
                    <div className='footer-link'>Contact</div>
                </Link>
                {/* <Link to="https://www.paypal.com/donate/?hosted_button_id=R3VRYUX2FKVHE">
                    <div className='footer-link'>Donate</div>
                </Link> */}
            </nav>
        </div>
    )
}

export default FooterLinks