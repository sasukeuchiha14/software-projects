const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mahilai', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const msgSchema = new mongoose.Schema({ regarding: String, name: String, email: String, message: String });
const Msg = mongoose.model('msgs', msgSchema);

app.post('/api/msg', async (req, res) => {
  const newMsg = new Msg({
    regarding: req.body.regarding,
    name: `${req.body.firstName} ${req.body.lastName}`,
    email: req.body.email,
    message: req.body.message
  });
  try {
    const savedMsg = await newMsg.save();
    res.status(201).json(savedMsg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/msg', async (req, res) => {
    try {
      const msg = await Msg.find();
      res.status(200).json(msg);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})