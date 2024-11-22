// src/components/Header.js
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-4">
      <Container className="d-flex justify-content-between align-items-center">
      <img src={logo} alt="DriveMatch Logo" className="logo" />
        <div className="d-flex align-items-center gap-3">
          <NavDropdown 
            title={<span className="text-white header-font">Menu</span>} 
            id="nav-dropdown"
            className="custom-dropdown header-font"
          >
            <NavDropdown.Item href="/" className="header-font">Home</NavDropdown.Item>
            <NavDropdown.Item href="#" className="header-font">Language</NavDropdown.Item>
            <NavDropdown.Item href="/login" className="header-font">Sign Up/Log In</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link 
            href="#" 
            className="rent-vehicle-btn header-font"
          >
            Rent Out Your Vehicle
          </Nav.Link>
        </div>
      </Container>
      <Container className="text-center mt-3">
        <h1 className="display-4">Share a Vehicle, Help Save the Planet</h1>
        <p className="lead">Find the perfect vehicle wherever you need it.</p>
      </Container>
    </header>
  );
};

export default Header;
