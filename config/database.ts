import * as mongodb from 'mongodb'
import dotenv from 'dotenv'

export const collections : { users? : mongodb.Collection } = {}

export async function connectToDb () {
    const db_uri = process.env.DB_CONN
    const db_name = process.env.DB_NAME
    const db_collection = process.env.DB_COLLECTION

    if (db_uri != null && db_name != null && db_collection != null) {
        const client : mongodb.MongoClient = new mongodb.MongoClient(db_uri)
        await client.connect()

        const db : mongodb.Db = client.db(db_name)
        const collection : mongodb.Collection = db.collection(db_collection)

        collections.users = collection

        console.log(`Successfully connected to the database.\nDatabase name: ${db_name}\nCollection: ${db_collection}`)
    }
}


