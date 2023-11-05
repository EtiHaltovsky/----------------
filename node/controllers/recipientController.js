const Recipient = require('../models/recipientModel');

  const getAllRecipient = async () => {
    try {
      const re = await Recipient.find();
      return re
    }
    catch(err) {
      return err
    }
  };
  
  const getRecipientById = ( id ) => {
    return Recipient.findById(id);
  };
  
  
  const addRecipient = async (obj) => {
    try{
      const r = new recipients(obj);
      await (r.save())
      return r;
    }
    catch(err){
      return err;
    }
  };
  
  const updateRecipient = async (obj) => {
    console.log("obj", obj)
    try{
      await Recipient.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deleteRecipient = async (id) => {
    await Recipient.findByIdAndDelete(id);
      return 'Deleted!';
    }  
  
  module.exports = {
    getAllRecipient,
    getRecipientById,
    addRecipient,
    updateRecipient,
    deleteRecipient,
  };