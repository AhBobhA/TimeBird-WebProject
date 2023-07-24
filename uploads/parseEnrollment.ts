import * as fs from 'fs';
import parse from 'csv-parser';
import Enrollment from '../models/enrollments';

export function readEnrollment(callback: any, endCallback: any){
  let userIdCounter = 1
  fs.createReadStream('./uploads/enrollment.csv')
  .pipe(parse({ separator: ',' }))
  .on('data', (row: Record<string, any>) => {
    const ed = new Date(row['enrolled_date'])
    const newRow = new Enrollment(
      row['unit_id'],
      row['semester_id'],
      parseInt((row['student_id'])),
      ed.getTime(),
      parseInt(row['result']),
      Date.now(),
      "anh duc ha",
    )
    userIdCounter++;
    callback(newRow)
  }).on ('end', ()=> {endCallback()})
}
