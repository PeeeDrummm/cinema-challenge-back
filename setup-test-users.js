/**
 * Create Test User Script
 */
require('dotenv').config();
const mongoose = require('mongoose');
const { User } = require('./src/models');

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for creating test user');
    return mongoose.connection;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

// Create a test user
const createTestUser = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    // Check if test user already exists
    const existingUser = await User.findOne({ email: 'test@example.com' });
    
    if (existingUser) {
      console.log('Test user already exists.');
      process.exit(0);
    }
    
    // Create test user
    const testUser = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'user'
    });
    
    console.log('Test user created successfully with email: test@example.com and password: password123');
    
    // Create test admin user
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    
    if (!adminExists) {
      await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin'
      });
      
      console.log('Test admin created successfully with email: admin@example.com and password: admin123');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating test user:', error);
    process.exit(1);
  }
};

// Run the function
createTestUser();
