import * as fs from 'fs';
import parse from 'csv-parser';
import Semester from '../models/Semesters';

export function readSemesters(callback: any, endCallback: any){
  fs.createReadStream('./uploads/semester.csv')
  .pipe(parse({ separator: ',' }))
  .on('data', (row: Record<string, any>) => {
    const sd = new Date(row['start_date'])
    const ed = new Date(row['end_date'])
    const newRow = new Semester(
       row['semester_id'],
       sd.getTime(),
       ed.getTime()
    )
    callback(newRow)
  }).on ('end', ()=> {endCallback()})
}
