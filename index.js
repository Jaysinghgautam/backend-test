 import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send("hello from login")
})

app.get("/ping", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running 🚀",
    time: new Date()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
