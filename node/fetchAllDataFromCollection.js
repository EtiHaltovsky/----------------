// const { MongoClient } = require('mongodb');

// async function fetchAllDataFromCollection() {
//   const uri = 'mongodb://localhost:27017'; // URI של מסד הנתונים MongoDB
//   const dbName = 'UniteVolunteerDB'; // שם בסיס הנתונים
//   const collectionName = 'volunteers'; // שם הקולקציה
  
//   const client = new MongoClient(uri, { useUnifiedTopology: true });
  
//   // const client=new 
//   try {
//     await client.connect();
    
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
    
//     const result = await collection.find({}).toArray();
    
//     return result;
//   } catch (error) {
//     console.error('שגיאה בשליפת הנתונים ממסד הנתונים:', error);
//     throw error;
//   } finally {
//     client.close();
//   }
// }

// module.exports = fetchAllDataFromCollection;


// const objectsArray = [];
// const object1 = { name: 'John', age: 30 };
// const object2 = { name: 'Jane', age: 25 };

// const object3={}
// objectsArray.push(object1);
// objectsArray.push(object2);

// console.log(objectsArray);




const { MongoClient } = require('mongodb');

const uri = 'mongodb://0.0.0.0:27017/'; // כתובת ה-URI של MongoDB
const databaseName = 'UniteVolunteerDB'; // שם מסד הנתונים
const collectionName = 'ratings'; // שם הקולקציה

async function fetchDataFromMongoDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    const data = await collection.find().toArray();

    const objectsArray = [];

    data.forEach((document) => {
      objectsArray.push(document);
    });

    console.log(objectsArray);

    client.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fetchDataFromMongoDB();
