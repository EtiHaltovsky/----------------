const ratings = require('../models/ratingsModel');

  const getAllRatings = async () => {
    try {
      const re = await ratings.find(filters);
      return re
    }
    catch(err) {
      return err
    }
  };

  const getRatingsQueries = async () => {
    console.log(000)
    try {
      const vol = await ratings.find(filters);
        //{ "volunteerId": "023768310" },
        // { "selectedHospital": "אסותא אשדוד" }&&  { "preferredHours": "שעות הבוקר" }
  
    
      console.log(vol) 
      return vol
    }
    catch(err) {
      return err
    }
  };
  
  
  const getRatingsById = ( id ) => {
    return ratings.findById(id);
  };
  
  
  const addRatings = async (obj) => {
    try{
      const r = new ratings(obj);
      await (r.save())
      return r;
    }
    catch(err){
      return err;
    }
  };
  
  const updateRatings = async (obj) => {
    console.log("obj", obj)
    try{
      await ratings.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deleteRatings = async (id) => {
    await ratings.findByIdAndDelete(id);
      return 'Deleted!';
    }  
  
  module.exports = {
    getAllRatings,
    getRatingsById,
    addRatings,
    updateRatings,
    deleteRatings,
    getRatingsQueries,
  }; 

 