const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Vinayk6561:Vinayk6561@cluster0.ml8xd2o.mongodb.net/Food_For_Foodie?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('DATABASE CONNECTED');

    // Fetch food items using modern promise-based approach
    const foodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = foodItems;
    
    // Fetch food categories
    const foodCategories = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.foodCategory = foodCategories;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process on connection failure
  }
};

module.exports = mongoDB;
