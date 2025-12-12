/** 
 * Todo {
 *  title: string;
 *  description: string;
 *  completed: boolean;
 * }
 *  
 *  */ 

const mongoose = require("mongoose");
// mongodb url body
// mongodb+srv://random name :iyYpXTyagExLtmOd@cluster0.wpmr503.mongodb.net/
// never push this to github (which I'm gonna do for now)

mongoose.connect("mongodb+srv://bhaweshchoudhary100:iyYpXTyagExLtmOd@cluster0.wpmr503.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}