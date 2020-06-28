const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect( 'mongodb://localhost/todo-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
    
mongoose.connection.on("connected", ()=>{
	console.log("Mongoose is connected!!!");
})

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");