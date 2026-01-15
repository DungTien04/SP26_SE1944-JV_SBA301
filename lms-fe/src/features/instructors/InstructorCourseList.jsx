import React from "react";
import Button from "../../shared/components/Button";

const InstructorCourseList = () => {
  return (
    <section>
      <h2>Course Management</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
                <Button title="Edit" variant="primary" /> |
                <Button title="Delete" variant="warning" /> |
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default InstructorCourseList;
