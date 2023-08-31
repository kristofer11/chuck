import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sign from '../assets/Chuck for Schoolboard 2023.png';
import FbLogo from '../assets/5296499_fb_facebook_facebook logo_icon.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img src={Sign} width='222' alt='Campaign sign - re-elect Chuck Whitfield for Monroe School Board Director District 2' /> */}
                        <div className='navbar-brand-sec-1'>
                            <h1><span className='chuck'>Chuck</span><span className='whitfield'>Whitfield</span></h1>
                            <p>for Monroe School board</p>
                        </div>
                        <div className='navbar-brand-sec-2'>District 2</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >Menu</Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-md-end'>
                        <Nav >
                            <Nav.Link href="#home">Home</Nav.Link>

                            <ScrollLink
                                to="about-chuck"
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link>About Chuck</Nav.Link>
                            </ScrollLink>

                            <ScrollLink
                                to="home-priorities"
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link>Priorities</Nav.Link>
                            </ScrollLink>

                            {/* <Nav.Link href="#home-priorities">Priorities</Nav.Link> */}
                            <Nav.Link href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank" ><img src={FbLogo} className='fb-logo' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header