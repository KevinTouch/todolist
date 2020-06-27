const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.DB_URL || 'mongodb://localhost/todo-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
    
mongoose.connection.on("connected", ()=>{
	console.log("Mongoose is connected!!!");
})

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");