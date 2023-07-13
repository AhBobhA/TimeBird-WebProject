import * as fs from 'fs';
import parse from 'csv-parser';
import Unit from '../models/Units';

export function readUnits(callback: any, endCallback: any){
  fs.createReadStream('./uploads/unit.csv')
  .pipe(parse({ separator: ',' }))
  .on('data', (row: Record<string, any>) => {
    const newRow = new Unit(
       row['UnitCode'],
       row['Title'],
       row['Summary'],
       Date.now(),
       Date.now(),
       "anh duc ha",
    )
    callback(newRow)
  }).on ('end', ()=> {endCallback()})
}
