import { ObjectId } from "mongodb";

export default class Semester {
    constructor(
        public semester_id : string,
        public start_date : number,
        public end_date : number,
        public _id? : ObjectId
    ) {}
}