import { ObjectId } from "mongodb"

export default class User {
    constructor(
        public user_id : number,
        public username : string,
        public hash : string,
        public salt : string,
        public firstname : string,
        public lastname : string,
        public dob : string,
        public gender : string,
        public address : string,
        public roles : string,
        public is_deleted : boolean,
        public updated_at : string,
        public created_at : string,
        public updated_by : string,
        public _id?: ObjectId
    ) {}
}