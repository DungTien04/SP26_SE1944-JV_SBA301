import React from 'react';
import { Container, Row, Col, Button, Form, Badge, Image } from 'react-bootstrap';
import '../../../styles/HeroSection.css';
import imageHero from '../../../assets/images/imageHero.png';
const HeroSection = () => {
  const imageHero1 = imageHero;
  return (
    <Container fluid className="hero-section" style={{ backgroundColor: '#F6F9FE' }}>
      <Container>
        <Row className=" d-flex align-items-center justify-content-center min-vh-75 py-5">
          <Col lg={5} className="mb-5 mb-lg-0">
            <Badge bg="success" className="mb-4">
              ✓ Get 30% off on first enroll
            </Badge>

            <h1 className="display-4 fw-bold mb-4">
              Advance your<br />engineering skills with<br />us.
            </h1>

            <p className="lead text-muted mb-5">
              Build skills with our courses and mentor from world-class companies.
            </p>
            <div className="search-container mb-5">
              <Form className="d-flex gap-2">
                <Form.Control
                  type="text"
                  placeholder="Java"
                  className="search-input"
                  style={{ borderRadius: '50px', padding: '12px 20px' }}
                />
                <Button

                  className="search-btn"
                  ca
                  style={{ borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1921BC', border: 'none' }}
                >
                  🔍
                </Button>
              </Form>
            </div>

            <Row className="mt-5">
              <Col md={4} className="mb-3 mb-md-0">
                <div className="feature-item">
                  <div className="feature-icon mb-2">✓</div>
                  <p className="fw-semibold">Flexible</p>
                </div>
              </Col>
              <Col md={4} className="mb-3 mb-md-0">
                <div className="feature-item">
                  <div className="feature-icon mb-2">✓</div>
                  <p className="fw-semibold">Learning path</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature-item">
                  <div className="feature-icon mb-2">✓</div>
                  <p className="fw-semibold">Community</p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={5} className="text-center">
            <Image src={imageHero1} style={{ width: '90%', height: '90%', objectFit: 'cover' }} alt="Hero" rounded />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeroSection;