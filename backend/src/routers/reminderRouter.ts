import express, { Request, Response } from 'express';
import { Reminder } from '../models/reminderModel';


export const reminderRouter = express.Router()



// API endpoint to get all reminders
reminderRouter.get('/reminders', async (req: Request, res: Response) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    console.error('Error in /reminders route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to add a new reminder
reminderRouter.post('/reminders', async (req: Request, res: Response) => {
  try {
    const { description, datetime ,phone} = req.body;
    
  
    const newReminder = new Reminder({ description, datetime ,phone});

    // Save the new reminder
    await newReminder.save();

    res.status(201).json(newReminder);
  } catch (error) {
    console.error('Error in POST /reminders route:', error);
    // Log the specific error details for further investigation
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to delete a particular reminder
reminderRouter.delete('/reminders/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Reminder.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error in DELETE /reminders/:id route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to update a particular reminder
reminderRouter.put('/reminders/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { description, datetime,phone } = req.body;
    await Reminder.findByIdAndUpdate(id, { description, datetime,phone });
    res.status(200).send();
  } catch (error) {
    console.error('Error in PUT /reminders/:id route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

