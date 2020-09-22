import { MongoClient } from 'mongodb'
import { Database } from '../lib/types'

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.yhwwm.mongodb.net:27017,cluster0-shard-00-01.yhwwm.mongodb.net:27017,cluster0-shard-00-02.yhwwm.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-ukauc3-shard-0&authSource=admin&retryWrites=true&w=majority`
export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db(process.env.DB_NAME)

  return {
    listings: db.collection('test_listings')
  }
}
