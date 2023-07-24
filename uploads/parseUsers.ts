import * as fs from 'fs';
import parse from 'csv-parser';
import User from '../models/user';
import {genPassword} from '../lib/utils'

export function readUsers(callback: any, endCallback: any){
  let userIdCounter = 1
  fs.createReadStream('./uploads/user.csv')
  .pipe(parse({ separator: ',' }))
  .on('data', (row: Record<string, any>) => {
    const genPass = genPassword(row['password'])
    const newRow = new User(
      userIdCounter,
      row['user_name'],
      genPass['hash'],
      genPass['salt'],
      row['firstname'],
      row['lastname'],
      row['dob'],
      row['gender'],
      row['address'],
      row['role'],
      false,
      Date.now(),
      Date.now(),
      "anh duc ha",
    )
    userIdCounter++;
    callback(newRow)
  }).on ('end', ()=> {endCallback()})
}
