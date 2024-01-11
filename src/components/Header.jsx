import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
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
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="/about">About Chuck</Nav.Link>
                            <Nav.Link href="/endorsements">Endorsements</Nav.Link>

                            {/* <ScrollLink
                                to="home-priorities"
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link>Priorities</Nav.Link>
                            </ScrollLink> */}

                            {/* <ScrollLink
                                to="endorsements"
                                smooth={true}
                                duration={500}
                            >
                                <Nav.Link>Endorsements</Nav.Link>
                            </ScrollLink> */}

                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="https://secure.anedot.com/whitfieldforeducation/donate" className='donate-link-header' >Donate</Nav.Link>

                            {/* <Nav.Link href="#home-priorities">Priorities</Nav.Link> */}
                            {/* <Nav.Link href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank" ><img src={FbLogo} className='fb-logo' /></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header