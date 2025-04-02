import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlayCircle, FaRocket, FaChartLine } from "react-icons/fa";

const Home = () => {
  const heroStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    paddingTop: "80px",
  };

  return (
    <>
      <section id="hero" style={heroStyle}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1
                className="fw-bold display-3 mb-4"
                style={{ lineHeight: 1.2 }}
              >
                Transform Your Digital Vision Into Reality
              </h1>
              <h2 className="fw-light h3 mb-4 opacity-75">
                Crafting innovative web solutions that elevate your business to
                new heights
              </h2>
              <div className="d-flex gap-3 mb-5">
                <Button
                  variant="light"
                  className="hero-btn d-flex align-items-center"
                >
                  <FaRocket className="me-2" /> Get Started
                </Button>
                <Button
                  variant="outline-light"
                  className="hero-btn d-flex align-items-center"
                >
                  <FaPlayCircle className="me-2" /> Watch Demo
                </Button>
              </div>
              <div className="d-flex gap-4">
                <div>
                  <h3 className="h2 fw-bold mb-0">500+</h3>
                  <p className="opacity-75">Projects Completed</p>
                </div>
                <div>
                  <h3 className="h2 fw-bold mb-0">95%</h3>
                  <p className="opacity-75">Client Satisfaction</p>
                </div>
              </div>
            </Col>
            {/* <Col lg={6} className="text-center">
              <img
                src="assets/img/hero-img.png"
                className="img-fluid"
                alt="Hero illustration"
                style={imageStyle}
              />
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="bg-light py-5">
        <Container>
          <Row className="g-4">
            {["Innovation", "Excellence", "Growth"].map((title, index) => (
              <Col md={4} key={index}>
                <div className="p-4 bg-white rounded-4 shadow-sm text-center">
                  <FaChartLine className="fs-1 text-primary mb-3" />
                  <h3 className="h4 mb-3">{title}</h3>
                  <p className="text-muted mb-0">
                    Delivering exceptional solutions that drive business
                    success.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
