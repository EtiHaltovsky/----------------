import { MongoClient } from 'mongodb';
// import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
// פונקציה אסינכרונית עבור שליפת הנתונים ממסד הנתונים
// async function FetchDB() {
  const FetchDB = () => {

  const uri = 'mongodb://localhost:27017'; // URI של מסד הנתונים MongoDB
  const dbName = 'UniteVolunteerDB'; // שם בסיס הנתונים

  // יצירת חיבור למסד הנתונים
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    dbName.volunteers.connect(); // התחברות למסד הנתונים
    
    const db = client.db(dbName); // קבלת יישות בסיס הנתונים
    const volunteers = db.volunteers('volunteers'); // קבלת יישות הקולקציה
    
    // const query = { /* אובייקט עם התנאים לחיפוש */ };
    // const options = { /* אובייקט עם האפשרויות של השאילתה */ };
    
    const result = volunteers.find.toArray(); // ביצוע שאילתת חיפוש וקבלת תוצאות
    
    return result; // החזרת התוצאות
  } catch (error) {
    console.error('שגיאה בשליפת הנתונים ממסד הנתונים:', error);
    throw error;
  } finally {
    client.close(); // סגירת החיבור למסד הנתונים בסיום הפונקציה
  }
}

export default FetchDB;
