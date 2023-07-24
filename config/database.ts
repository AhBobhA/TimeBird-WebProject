import * as mongodb from 'mongodb'

export const collections : { 
    users? : mongodb.Collection, 
    semester? : mongodb.Collection, 
    course? : mongodb.Collection, 
    units? : mongodb.Collection
    enrollments? : mongodb.Collection } = {}

export async function connectToDb () {
    const db_uri = process.env.DB_CONN
    const db_name = process.env.DB_NAME
    const db_collection_user = process.env.DB_COLLECTION_USERS
    const db_collection_sem = process.env.DB_COLLECTION_SEMESTER
    const db_collection_course = process.env.DB_COLLECTION_COURSE
    const db_collection_units = process.env.DB_COLLECTION_UNITS
    const db_collection_enrollments = process.env.DB_COLLECTION_ENROLLMENTS

    if (db_uri != null && db_name != null 
        && db_collection_user != null && db_collection_sem != null 
        && db_collection_course != null && db_collection_units != null
        && db_collection_enrollments != null) {

        const client : mongodb.MongoClient = new mongodb.MongoClient(db_uri)
        await client.connect()

        const db : mongodb.Db = client.db(db_name)
        const collection_user : mongodb.Collection = db.collection(db_collection_user)
        const collection_sem : mongodb.Collection = db.collection(db_collection_sem)
        const collection_course : mongodb.Collection = db.collection(db_collection_course)
        const collection_units : mongodb.Collection = db.collection(db_collection_units)
        const collection_enrollments : mongodb.Collection = db.collection(db_collection_enrollments)

        collections.users = collection_user
        collections.semester = collection_sem
        collections.course = collection_course
        collections.units = collection_units
        collections.enrollments = collection_enrollments

        console.log(`Successfully connected to the database.\nDatabase name: ${db_name}
                    \nCollections: ${db_collection_user}, ${db_collection_sem}, ${db_collection_course}, ${db_collection_units}, ${db_collection_enrollments}`)
    } else {
        console.log(`Missing environment variables.`)
    }
}


