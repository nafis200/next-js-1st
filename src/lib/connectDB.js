const { MongoClient, ServerApiVersion } = require('mongodb');
let db;
const connectDB = async ()=>{
   if(db) return db;
   try{
     const uri = process.env.MONGODB;
     const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      db = client.db('next-hero')
      return db

   } catch (error){

   }
};

export default connectDB