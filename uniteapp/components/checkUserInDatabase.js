const { MongoClient } = require('mongodb');

// פונקציה לחיבור למסד הנתונים MongoDB ובדיקה בטבלה "volunteers"
const checkUserInDatabase = async (username, email) => {
  try {
    // מחרוזת יחידת התקשורת של מסד הנתונים (URI)
    const uri = 'mongodb://localhost:27017';

    // יצירת מחלקת הלקוח והתחברות למסד הנתונים
    const client = new MongoClient(uri);

    // התחברות למסד הנתונים
    await client.connect();

    // קבלת יחידת הבסיס נתונים של המסד
    const database = client.db('myDatabase');

    // קבלת טבלת "volunteers"
    const collection = database.collection('volunteers');

    // בדיקה עבור שם משתמש ומייל
    const result = await collection.findOne({ username, email });

    // סגירת חיבור למסד הנתונים
    client.close();

    // החזרת תוצאת הבדיקה (true אם נמצא תואם, אחרת false)
    return !!result;
  } catch (error) {
    console.error('Error connecting to database:', error);
    return false;
  }
};

module.exports = { checkUserInDatabase };
