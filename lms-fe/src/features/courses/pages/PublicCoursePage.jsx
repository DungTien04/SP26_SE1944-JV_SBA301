import React, { useState } from "react";
import PublicCourseList from "../components/PublicCourseList";
import { Col, Container, Row } from "react-bootstrap";
import CourseFilter from "../components/CourseFilter";
import HeroSection from "../../public-site/components/HeroSection";
import { useLoaderData } from "react-router-dom";

const PublicCoursePage = () => {
  const [courses, setCourses] = useState(useLoaderData());
  // Call API


  return (
    <>
      <HeroSection />
      <section className="bg-white">
        <Container className="mt-5 py-2">
          <Row>
            <Col md={3} xl={3} className="bg-light rounded-3 p-4">
              <CourseFilter />
            </Col>

            <Col md={9} xl={9} className="bg-light rounded-3 py-5">
              <PublicCourseList courses={courses}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PublicCoursePage;
