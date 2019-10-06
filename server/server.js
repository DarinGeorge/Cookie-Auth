const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//app
const app = express();

//get routes
const appRoutes = require('./routes/store');
const authRoutes = require('./routes/auth');

//db
mongoose
	.connect(process.env.DATABASE_CLOUD, {
		//Change Database to either CLOUD or LOCAL depending on environment.
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('Database connection confirmed.'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
//routes middleware
app.use('/api', appRoutes);
app.use('/api', authRoutes);

//routes
app.get('/api', (req, res) => {
	res.json({ time: Date().toString() });
});

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server launched and pointing to port ${port}`);
});
