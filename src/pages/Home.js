import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/booking");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url('/plane.jpg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Flight Booking</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/booking">
              Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="text-center" style={{ background: "rgba(0,0,0,0.4)", padding: 40, borderRadius: 16 }}>
          <h1 className="mb-3" style={{ color: '#fff', textShadow: '0 2px 8px #000' }}>Welcome to Flight Booking</h1>
          <button className="btn btn-primary btn-lg" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
