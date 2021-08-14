const mongoose = require('mongoose');
// const { type } = require('os');
mongoose.connect('mongodb+srv://Harshii:harshi@123@friendlist.jabhy.mongodb.net/myFriends?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then((data)=>console.log("connected to database"))
.catch((error)=>console.log("Not Connected to database"));

