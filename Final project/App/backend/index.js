const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const deviceRoutes = require('./routes/deviceRoutes'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Auth route
app.use('/api/auth', authRoutes);

// Laite-reitit
app.use('/api', deviceRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
