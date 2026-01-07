// Importing the Express module
const express = require('express');
// Creating an instance of Express
const app = express();
// Defining the port number
const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json(
        {
            message: 'Home page !!!'
        });
});

// app.all('*',(req,res)=>{
//     res.status(500).json({
//         message:"Not Build Yet"
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})