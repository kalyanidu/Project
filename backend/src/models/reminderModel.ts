
import mongoose from 'mongoose'
const reminderSchema = new mongoose.Schema({
    description: String,
    datetime: String,
    phone:String
  });
  
export const Reminder = mongoose.model('Reminder', reminderSchema);