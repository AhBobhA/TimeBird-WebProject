import * as mongodb from 'mongodb'
import dotenv from 'dotenv'

export const collections : { users? : mongodb.Collection } = {}
export const collections_2 : { units? : mongodb.Collection } = {}
export const collections_3: {semester?: mongodb.Collection} ={}
export const collections_4: {course?: mongodb.Collection} ={}
export const collections_5: {enrollment?: mongodb.Collection} ={}


export async function connectToDb () {
    const db_uri = process.env.DB_CONN
    const db_name = process.env.DB_NAME
    const db_collection = process.env.DB_COLLECTION

    if (db_uri != null && db_name != null && db_collection != null) {
        const client : mongodb.MongoClient = new mongodb.MongoClient(db_uri)
        await client.connect()

        const db : mongodb.Db = client.db(db_name)
        const collection : mongodb.Collection = db.collection(db_collection)
        const collection_2: mongodb.Collection = db.collection("units")
        const collection_3: mongodb.Collection = db.collection("semester")
        const collection_4: mongodb.Collection = db.collection("course")
        const collection_5: mongodb.Collection = db.collection("enrollment")

        collections.users = collection
        collections_2.units =collection_2
        collections_3.semester =collection_3
        collections_4.course =collection_4
        collections_5.enrollment =collection_5

        console.log(`Successfully connected to the database.\nDatabase name: ${db_name}\nCollection: ${db_collection}`)
    } else {
        console.log(`Missing environment variables.`)
    }
}


