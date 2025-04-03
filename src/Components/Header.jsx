import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import "./Header.css"; // Create this CSS file for custom styles

const Header = () => {
  return (
    <header id="header" className="header">
      <Navbar
        expand="lg"
        className="navbar-custom shadow-sm"
        variant="dark"
        style={{
          background: "linear-gradient(to right, #1a237e, #0d47a1)",
          padding: "5px 0",
        }}
      >
        <div className="container">
          <Navbar.Brand
            as={Link}
            to="/"
            className="logo d-flex align-items-center"
          >
            <img
              src="assets/img/logo.png"
              alt=""
              style={{ height: "40px", width: "auto" }}
            />
            <span
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: "24px",
                paddingLeft: "15px",
                letterSpacing: "0.5px",
              }}
            >
              MahtoTechPro
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {[
                { to: "/", text: "Home" },
                { to: "/login", text: "Login" },
                { to: "/signup", text: "Signup" },
              ].map((item) => (
                <Nav.Link
                  key={item.text}
                  as={Link}
                  to={item.to}
                  className="nav-link mx-2"
                  style={{
                    fontWeight: "600",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
