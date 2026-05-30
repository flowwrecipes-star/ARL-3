// ══════════════════════════════════════════════════
//   A.R. Library — MongoDB Atlas Connection
// ══════════════════════════════════════════════════
require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI || MONGODB_URI.includes('YOUR_USERNAME')) {
  console.error('❌ .env file mein MONGODB_URI sahi se set karo!');
  console.error('   → .env file kholo aur apna Atlas connection string daalo');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
});

mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB Atlas connected — ar_library database');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected — reconnecting...');
});

module.exports = mongoose;
