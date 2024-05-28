import CourseListRow from "./CourseListRow";
import './CourseList.css';
import React from "react";

const CourseList = () => {
  return (
    <div className="App-table">
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
          <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
        </tbody>
      </table>
    </div>
  )
}

export default CourseList;
