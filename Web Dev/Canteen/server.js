const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/canteen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Schema and Model for Contacts
const mailSchema = new mongoose.Schema({ regarding: String, name: String, email: String, message: String });
const Mail = mongoose.model('mails', mailSchema);

// Schema and Model for Menu
const menuSchema = new mongoose.Schema({ day: String, time: String, content: String });
const week1 = mongoose.model('week1', menuSchema);
const week2 = mongoose.model('week2', menuSchema);
const week3 = mongoose.model('week3', menuSchema);
const week4 = mongoose.model('week4', menuSchema);

// Add data to Contacts
app.post('/api/mail', async (req, res) => {
  const newMail = new Mail({
    regarding: req.body.regarding,
    name: req.body.firstName + ' ' + req.body.lastName,
    email: req.body.email,
    message: req.body.message
  });
  try {
    const savedMail = await newMail.save();
    res.json(savedMail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch data from Contacts
app.get('/api/mail', async (req, res) => {
  try {
    const mail = await Mail.find();
    res.json(mail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch data from Menu for Week 1 to Week 4 or for a specific day and time
app.get('/api/menu/:week', async (req, res) => {
  const { week } = req.params;
  const { time, day } = req.query;
  let weekModel;

  switch (week) {
    case 'week1':
      weekModel = week1;
      break;
    case 'week2':
      weekModel = week2;
      break;
    case 'week3':
      weekModel = week3;
      break;
    case 'week4':
      weekModel = week4;
      break;
    default:
      return res.status(400).json({ message: 'Invalid week parameter' });
  }

  try {
    const query = {};
    if (day) query.day = day;
    if (time) query.time = time;

    const menu = day || time ? await weekModel.findOne(query) : await weekModel.find();
    if (menu) {
      res.json(menu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/edit_menu', async (req, res) => {
  const { week, day, time, newItem } = req.body;
  let weekModel;

  switch (week) {
    case 'week1':
      weekModel = week1;
      break;
    case 'week2':
      weekModel = week2;
      break;
    case 'week3':
      weekModel = week3;
      break;
    case 'week4':
      weekModel = week4;
      break;
    default:
      return res.status(400).json({ message: 'Invalid week parameter' });
  }

  try {
    const updatedMenu = await weekModel.findOneAndUpdate(
      { day, time },
      { content: newItem },
      { new: true }
    );

    if (updatedMenu) {
      res.json(updatedMenu);
    } else {
      res.status(404).json({ message: 'Menu not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
