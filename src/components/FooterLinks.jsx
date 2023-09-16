import { Link } from "react-router-dom"

const FooterLinks = () => {
    return (
        <div>
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
                    <div className='footer-link'>Contact/Donate</div>
                </Link>
            </nav>
        </div>
    )
}

export default FooterLinks