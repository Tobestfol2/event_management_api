const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  date: {
    type: Date,
    required: [true, 'Please add a date']
  },
  endDate: {
    type: Date
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  capacity: {
    type: Number,
    required: [true, 'Please add capacity'],
    min: [1, 'Capacity must be at least 1']
  },
  registeredCount: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Music', 'Wellness', 'Food & Drink', 'Sports', 'Other']
  },
  isFree: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    default: 'https://example.com/default-event.jpg'
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
  },
  organizer: {
    name: String,
    email: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);