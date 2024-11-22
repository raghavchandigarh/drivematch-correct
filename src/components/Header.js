// src/components/Header.js
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="py-4">
      <Container className="d-flex justify-content-between align-items-center">
      <img src={logo} alt="DriveMatch Logo" className="logo" />
        <Nav className="d-flex gap-3">
          <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">Rent Out Your Vehicle</Nav.Link>
          <Nav.Link href="#" className="text-white">Language</Nav.Link>
          <Nav.Link href="/login" className="text-white">Sign Up/Log In</Nav.Link>
        </Nav>
      </Container>
      <Container className="text-center mt-3">
        <h1 className="display-4">Share a Vehicle, Help Save the Planet</h1>
        <p className="lead">Find the perfect vehicle wherever you need it.</p>
      </Container>
    </header>
  );
};

export default Header;

