import { ObjectId } from "mongodb"

export default class Course {
    constructor(
        public unit_id : string[],
        public semester_id : string,
        public _id? : ObjectId
    ) {}
}