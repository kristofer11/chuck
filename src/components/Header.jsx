import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Sign from '../assets/Chuck for Schoolboard 2023.png'

const Header = () => {
  return (
    <header>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={Sign} width='222' alt='Campaign sign - re-elect Chuck Whitfield for Monroe School Board Director District 2' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >Menu</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-md-end'>
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Chuck</Nav.Link>
            <Nav.Link href="#link">Priorities</Nav.Link>
            <Nav.Link href="#link">Endorsements</Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100094757426779" target="_blank" >[Facebook Here]</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header