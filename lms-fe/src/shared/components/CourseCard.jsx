import { Link } from "react-router-dom";
import { checkPrice } from "../utils/checkPrice";
import { useEffect, useState } from "react";

const CourseCard = ({ course, enrollCourse }) => {
  // use then catch
  // const price = checkPrice(course)
  //   .then((price) => price)
  //   .catch((error) => error);

  // async await

  const [price, setPrice] = useState(null);

  useEffect(() => {
    const asyncPrice = async () => {
      try {
        const res = await checkPrice(course);
        setPrice(res);

      } catch (free) {
        setPrice(free);
      }
    };

    asyncPrice();
  }, [course]);

  // Logic

  // Behavious
  return (
    <>
      <div className="card" style={{ width: "95%" }}>
        <div className="d-flex justify-content-center mt-2">
          <img
            src={course.img}
            style={{ width: "90%", height: "250px" }}
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <Link to={`/courses/${course.id}`}>
            <h3 className="card-title">{course.title}</h3>
          </Link>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <label className="fw-bold">Price:</label> {price} ($)
          <br />
          <label className="card-text fw-bold">Student Number: </label>{" "}
          {course.studentNumber}
          <br />
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => {
              enrollCourse(course.courseId);
            }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
