const express = require("express")

const app = express();

// let note as a object 

/*
  note = {
    title : 
    description: 
  }
*/

app.use(express.json()); //app express.json() middleware ka use esh tarah karta hai

const notes = [

]

app.post("\notes", (req, res) => {
    console.log(req.body); // yaha data milega
    // data request karne ke pahle hume ek middleware (like express.json()) ka use karna hoga nahi toh out put undefine ayega
    notes.push(req.body) // notes array me req.body ke object ko store karenege array ke form me aur phir notes variable me push kara denge. Toh ab hum eshe bolte hai resource.
    res.status(201).json({
        message: "Note Created Successfully"
    })
})

module.exports = app;