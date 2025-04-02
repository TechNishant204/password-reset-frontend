import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaLock, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useAlert } from "../context/AlertContext";

const HOST = import.meta.env.VITE_HOST;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { addAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${HOST}/api/users/forgot-password`, {
        email,
      });
      addAlert(res.data.message, "success");
      setFormSubmitted(true);
    } catch (err) {
      addAlert(err.response?.data?.message || "An error occurred", "danger");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="w-100 shadow-lg border-0"
        style={{ maxWidth: "450px", borderRadius: "15px" }}
      >
        <Card.Body className="p-4 p-md-5">
          <div className="text-center mb-4">
            <FaLock size={50} className="text-primary mb-3" />
            <h2 className="mb-3 fw-bold">Forgot Password?</h2>
            <p className="text-muted">
              Enter your email to reset your password.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center">
              <p className="text-success fw-bold">
                <FaPaperPlane className="me-2" />
                Reset token has been sent to {email}
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-4">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <FaEnvelope className="text-primary" />
                  </span>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-start-0"
                    style={{ borderRadius: "0 10px 10px 0" }}
                  />
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2 fw-bold d-flex align-items-center justify-content-center"
                style={{ borderRadius: "10px" }}
              >
                <FaPaperPlane className="me-2" />
                Send Reset Link
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
