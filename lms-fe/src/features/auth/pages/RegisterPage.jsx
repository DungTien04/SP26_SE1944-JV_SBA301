import React from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import auth from "../services/auth.service";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [registerData, setRegisterData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    status: "ACTIVE",
    password: "",
    avatar: "",
    term: false,
  });

  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting registration data:", registerData);
    // Here you can add the logic to send the registration data to the server
    const promise = auth.register(registerData);

    promise
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("User registered successfully:", data);
        setMessage("Registration successful!");
        setError(false);
        return data;
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setError(true);
        setMessage("Registration failed: " + error.message);
      });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#3f6993", minHeight: "100vh" }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={7} lg={6} className="bg-light p-4 rounded-3 shadow">
            <h2 className="mb-4 text-center">Register</h2>
            {error && (
              <Alert className="alert alert-danger" role="alert">
                {message}
              </Alert>
            )}
            {!error && message && (
              <Alert className="alert alert-success" role="alert">
                {message}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col
                  md={6}
                  lg={6}
                  className="d-flex justify-content-center mb-3"
                >
                  <Form.Group className="mb-3 w-100" controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="py-3"
                      placeholder="Enter your name"
                      name="firstName"
                      value={registerData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col
                  md={6}
                  lg={6}
                  className="d-flex justify-content-center mb-3"
                >
                  <Form.Group className="mb-3 w-100" controlId="formBasicName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="py-3"
                      placeholder="Enter your name"
                      name="lastName"
                      value={registerData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="py-3"
                  placeholder="Enter email"
                  name="email"
                  value={registerData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="py-3"
                  placeholder="Password"
                  name="password"
                  value={registerData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className="py-3"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Check className="mb-4">
                <Form.Check.Input
                  type="checkbox"
                  id="termsCheckbox"
                  name="term"
                  checked={registerData.term}
                  onChange={handleChange}
                />
                <Form.Check.Label htmlFor="termsCheckbox">
                  I agree to the <a href="#terms">Terms and Conditions</a>
                </Form.Check.Label>
              </Form.Check>

              <Button
                variant="success"
                type="submit"
                className="w-100 py-3 fs-4 mb-4"
              >
                Register Now
              </Button>
            </Form>

            <div className="text-center">
              Already have an account?<Link to="/login"> Sign in</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RegisterPage;
