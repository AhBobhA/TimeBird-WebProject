import { ObjectId } from "mongodb";

export default class Enrollment {
    constructor(
        public unit_id : string,
        public semester_id : string,
        public student_id : string,
        public enrolled_date : number,
        public result : number,
        public updated_at : number,
        public updated_by : string,
        public _id? : ObjectId
    ) {}
}