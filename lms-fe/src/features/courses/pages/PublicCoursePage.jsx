import React, { useState } from "react";
import PublicCourseList from "../components/PublicCourseList";

const PublicCoursePage = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          className="btn btn-warning"
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          Show/Hide
        </button>
      </div>

      {isShow && <PublicCourseList />}

      <div style={{ display: isShow ? "block" : "none" }}>
        <PublicCourseList />
      </div>
    </div>
  );
};

export default PublicCoursePage;
