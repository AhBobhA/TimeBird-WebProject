import { ObjectId } from "mongodb";

export default class Unit {
    constructor(
        public unit_id : string,
        public name : string,
        public description : string,
        public created_at : number,
        public updated_at : number,
        public _id? : ObjectId
    ) {}
}