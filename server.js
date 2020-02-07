const express = require('express');
const config = require('config');
const path = require('path')

const app = express();
const fileupload = require('express-fileupload'); 
// initializing the session
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = config.get('mongoURI');
const connectDB = require('./config/db');
const User = require('./models/User');

// create session
const store = new MongoDBStore({
	uri: MONGODB_URI,
	collection: 'sessions'
});

// initiate session
app.use(
	session({
		secret: 'my secret',
		resave: false,
		saveUninitialized: false,
		store
	})
);


app.use((req, res, next) => {

	if (!req.session.user) {
		return next();
	}
	User.findById(req.session.user._id)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => console.log(err));
});


// -----------------------

app.use(fileupload())
connectDB();

app.use(express.json({ extended: false }));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/item', require('./routes/api/item'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/bread', require('./routes/api/bread'));
app.use('/api/search', require('./routes/api/search'));
app.use('/api/upload', require('./routes/api/upload')); 

// serve static assets in production 
if(process.env.NODE_ENV === 'production'){
  // set static folder 
  app.use(express.static('client/build'))

  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`app is runninig at port ${PORT}`))
