// Printing based on conditions
import { Seq } from 'immutable';

export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function printBestStudents (grades) {
  const gradesSeq = Seq(grades);
  const bestStudents = gradesSeq.filter(student => student.score >= 70);
  const capitalizedBestStudents = bestStudents.map(student => ({
    score: student.score,
    firstName: capitalize(student.firstName),
    lastName: capitalize(student.lastName)
  }));
  console.log(capitalizedBestStudents.toJS());
}
