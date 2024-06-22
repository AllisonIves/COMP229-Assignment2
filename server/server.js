const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//const projectRoutes = require('./routes/project');
//const userRoutes = require('./routes/user');

//mongoose.connect(process.env.MONGODB_URI);

//const db = mongoose.connection;
//db.on('error', (error) => console.error(error));
//db.once('open', () => console.log('Connected to Mongo DB'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//app.use('/api/projects', projectRoutes );
//app.use('/api/users', userRoutes );

app.get((req, res) =>{
    res.json({message: "Welcome to DressStore Application."})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})