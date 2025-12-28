const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: '.env' }); // Adjust path if your .env is elsewhere

// Load model
const Event = require('../models/Event'); // Adjust path based on your structure

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB connection successful for seeding!'));

// Read JSON file
const events = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/sample-events.json'), 'utf-8')
);

// Import data into DB
const importData = async () => {
  try {
    await Event.create(events);
    console.log('Sample events data successfully loaded! 🎉');
    process.exit();
  } catch (err) {
    console.error('Error importing data:', err);
    process.exit(1);
  }
};

// Delete all existing data
const deleteData = async () => {
  try {
    await Event.deleteMany();
    console.log('All existing events deleted!');
    process.exit();
  } catch (err) {
    console.error('Error deleting data:', err);
    process.exit(1);
  }
};

// Run from command line: node seeds/events.js --import or --delete
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Please use: node seeds/events.js --import  OR  --delete');
  process.exit();
}