import * as fs from 'fs';
import parse from 'csv-parser';
import Course from '../models/courses';

export function readCourse(callback: any, endCallback: any){
  fs.createReadStream('./uploads/course.csv')
  .pipe(parse({ separator: ',' }))
  .on('data', (row: Record<string, any>) => {
    const newRow = new Course(
      row['unitcode'].split(","),
      row['semester_id']
    )
    callback(newRow)
  }).on ('end', ()=> {endCallback()})
}
