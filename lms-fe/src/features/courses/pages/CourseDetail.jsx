import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseService from "../services/course.service";
import { Alert, Image, Spinner } from "react-bootstrap";

const CourseDetail = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // Call API to get course detail by id
  useEffect(() => {
    const getById = async () => {
      try {
        const reponseData = await courseService.findById(id);

        setCourse(reponseData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching course detail: ", error);
        setError(error);
      }
    };

    getById();
    // courseService.findById(id).then(...)
  }, [id]);

  return (
    <section>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div>
            <Image src={course?.img} alt={course?.title} fluid />
            <p>Course Title: {course?.title} </p>
            <p>Student number: {course?.studentNumber} </p>
            <p>Price: ${course?.price}</p>
          </div>
        </>
      )}
      {error && <Alert variant="danger">Error loading course detail!</Alert>}
    </section>
  );
};

export default CourseDetail;
