import React, { useState } from "react";
import CourseCard from "../../../shared/components/CourseCard";

const PublicCourseList = ({courses}) => {

  const [keyword, setKeyword] = useState("");
  const [courseResult, setCourseResult] = useState(courses);

  // Functions

  // Call API
  const search = (searchValue) => {
    if (searchValue) {
      const result = courses.filter((c) => c.title.includes(searchValue));

      setCourseResult(result);
    } else {
      console.log(courses);
      setCourseResult(courses);
    }
    // console.log(courseResult);
  };

  const enrollCourse = (id) => {
    console.log("You are selected: " + id);
    const result = courses.map((c) => {
      if (c.courseId === id)
        return { ...c, studentNumber: c.studentNumber + 1 };
      return c;
    });

    setCourses(result);
    setCourseResult(result);
  };

  // Behavious
  return (
    <section>
      <div className="row">
        {!courses || courseResult.length === 0 ? (
          <p>No record!</p>
        ) : (
          courses.map((c) => (
            <div key={c.courseId} className="col-md-4 col-xl-4 col-lg-4 mb-3">
              <CourseCard course={c} enrollCourse={enrollCourse} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PublicCourseList;
