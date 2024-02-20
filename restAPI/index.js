const express = require("express")
const users = require("./MOCK_DATA.json")
const fs = require("fs")

app = new express()
app.use(express.urlencoded({extended: false}))

const PORT = 8000;
app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li><br>`
        ).join("")}
    </ul>
    `;
    res.send(html)
})

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    console.log("id: ", id);
    const user = users.find((user) => user.id===id);
    console.log(user);
    res.json(user);
})

app.post("/api/users", (req, res)=> {
    const data = req.body
    // data.id = users.length+1
    users.push({...data, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json({"status": "success", "id": users.length})
    })
})
.patch((req, res)=>{

})
app.delete("/api/users/:id", (req, res)=> {
    const id = Number(req.params.id)
    const condition = (user) => user.id!==id
    // const user = users.filter((user) => user.id!==id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users.filter((user) => user.id!==id)), (err, data)=>{
        console.log("Successfully deleted!!!", id);
        return res.json({"status": "successfully deleted"})
    })
})
app.listen(PORT, () =>{
    console.log("Server started...")
})