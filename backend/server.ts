// import express from "express"
// import { PORT } from './utils/config';
// import { connectDB } from './database/db';
// import * as Colors from 'colors.ts'
// Colors.colors('', '')

// connectDB()

// const app = express()

// app.listen(PORT, () => console.log(`server started on port ${PORT}`));
import  express from "express";
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';
import * as Colors from 'colors.ts'
Colors.colors('', '')

connectDB()

const app = express();
app.use(express.json());

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/user', require('./routes/UserRoute'));

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`));