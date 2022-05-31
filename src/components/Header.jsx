import React from 'react'
import { Container, Navbar, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <NavbarBrand href="#home">
        <img src="https://i.ibb.co/NZZhZyY/ZeusLogo.png" height={50}/>
    </NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
        <NavDropdown title="Servicios" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Diseño Ux Ui</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Desarrollo Web</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Portfolio</Nav.Link>
        <Nav.Link href="#link">Equipo</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}
//     <!--
// Fixed Navigation
// ==================================== -->
{/* <header className="navigation fixed-top"> */}
// </header>
// End Fixed Navigation ====================================

export default Header