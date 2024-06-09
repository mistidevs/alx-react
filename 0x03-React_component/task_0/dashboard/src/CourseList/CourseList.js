import CourseListRow from "./CourseListRow";
import './CourseList.css';
import React from "react";
import { shape, array } from "prop-types";
import userShape from "./CourseShape";
import PropTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
  return (
    <div className="App-table">
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {listCourses.length > 0 ? (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit.toString()}
                isHeader={false}
              />
            ))
          ) : (
            <CourseListRow
              textFirstCell="No course available yet"
              textSecondCell=""
              isHeader={false}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(userShape).isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
