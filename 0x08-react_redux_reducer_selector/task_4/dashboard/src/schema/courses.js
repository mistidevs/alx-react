import { Map } from 'immutable';

export const courseSchema = {
  id: '',
  name: '',
  credit: 0,
  isSelected: false
};

export function coursesNormalizer(data) {
  return Map(data.reduce((normalizedCourses, course) => {
    return normalizedCourses.set(course.id, {
      id: course.id,
      name: course.name,
      credit: course.credit,
      isSelected: course.isSelected || false
    });
  }, Map()));
}