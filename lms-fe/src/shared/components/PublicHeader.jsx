import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "@/assets/logo.svg";
import "@/styles/header.css";
import {
  AuthActionsContext,
  AuthStateContext,
} from "../../app/providers/AuthProvider";
import { Link } from "react-router-dom";
import auth from "../../features/auth/services/auth.service";

const PublicHeader = () => {
  const { user } = useContext(AuthStateContext);
  const { logout } = useContext(AuthActionsContext);

  //

  const handleSelect = async(eventKey) => {
    console.log("Selected: " + eventKey);

    if (eventKey === "signout") {
      logout();
    } else if (eventKey === "profile") {
      await auth.me();
    }
  };

  return (
    <Container>
      <Row className="justify-content-center py-4">
        <Col md={11}>
          <Row>
            <Col md={2} className="d-flex justify-content-end">
              <Image src={logo} style={{ width: "160px" }} />
            </Col>
            <Col
              md={7}
              className="d-flex align-items-center justify-content-center"
            >
              <Nav
                className="gap-2 justify-content-end"
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link className="custom-nav" href="/home">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="custom-nav" eventKey="link-1">
                    Courses
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="custom-nav" eventKey="link-2">
                    Mentor
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="custom-nav" eventKey="disabled">
                    Group
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="custom-nav" eventKey="link-2">
                    Testimonial
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="custom-nav" eventKey="link-2">
                    Docs
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={3} className="d-flex justify-content-center">
              {user ? (
                <Nav
                  variant="pills"
                  activeKey="1"
                  onSelect={(eventKey) => {
                    handleSelect(eventKey);
                  }}
                >
                  <NavDropdown title={user.name} id="nav-dropdown">
                    <NavDropdown.Item eventKey="signout">
                      Sign Out
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="profile">
                      My Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <>
                  <Button
                    variant="info"
                    className="me-3"
                    style={{ width: "120px" }}
                  >
                    <Link
                      className="text-decoration-none text-light"
                      to="/login"
                    >
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="outline-primary" style={{ width: "120px" }}>
                    Sign Up
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PublicHeader;
