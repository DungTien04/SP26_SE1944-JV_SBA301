import React, { useState } from "react";
import CourseFilter from "./CourseFilter";
import PublicCourseList from "./PublicCourseList";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const MainCourseList = () => {
  const [courses, setCourses] = useState(useLoaderData());

  return (
    <section className="bg-white">
      <Container className="mt-5 py-2">
        <Row>
          <Col md={3} xl={3} className="bg-light rounded-3 p-4">
            <CourseFilter />
          </Col>

          <Col md={9} xl={9} className="bg-light rounded-3 py-5">
            <PublicCourseList courses={courses} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainCourseList;
