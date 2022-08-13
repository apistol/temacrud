const express = require('express')
const bodyParser = require('body-parser')
const app = express()   
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json())


const initialUsers = [
    {
        id:1,
        userName:"Mircea",
        email:"mircea@gmail.com",
    },
    {
        id:2,
        userName:"Cristi",
        email:"cristi@gmail.com",
    }, 
    {
        id:3,
        userName:"Florica",
        email:"florica@gmail.com",
    }
]


app.get("/users", (req, res) => {
    res.status(200).send({result:initialUsers})
})

app.post("/users", (req, res) => {
    const newUsers = [...initialUsers, req.body]
    res.status(200).send({result:newUsers})
})

app.put("/users/:id", (req, res) => {
    console.log(req.body)
    const updatedUsersList = initialUsers.map( user => {
        if(user.id == req.params.id){
            console.log("ajung aici")
            return ({
                ...user,
                userName: req.body.userName
            })
        }else {
            return user
        }
    })
    res.status(200).send({result: updatedUsersList})
})


app.delete('/users/:id', (req, res) => {
    const updatedList = initialUsers.filter( user => user.id !== parseInt(req.params.id))
    res.status(200).send({result:updatedList})

})


app.listen(3001, () => {
    console.log("Your server has started")
})