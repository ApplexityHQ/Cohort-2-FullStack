const express = require ("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());

// body {
// title: string;
// description: string }

app.post("/todo", async function(req,res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json ({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) { 
    const todos = await todo.find({});
    res.json ({
        todos
    })
})

app.put("/completed", async function(req, res) { 
    const updatePayload = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayload);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    res.json ({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);



// write basic express boilerplate code,
// with express.json() middleware

