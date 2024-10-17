import express from 'express';
import cors from 'cors';
import passport from './auth/passportConfig.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080', // Allow the frontend on localhost
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// Initialize Passport 
app.use(passport.initialize());

// Import user and destination router
import usersRouter from './routers/userRouter.js';
import destinationsRouter from './routers/destinationRouter.js';

// Use user and destination router
app.use('/api/users', usersRouter);
app.use('/api/destinations', destinationsRouter);

//For testing
app.get('/', (req, res) => {
  res.send('Backend is running');
});


app.listen(port, () => {
  console.log(`Express server is running on ${port}`);
});
