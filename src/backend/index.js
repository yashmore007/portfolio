const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;  

    
    console.log('Form data received:', { name, email, message });


    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

app.listen(PORT,()=>{

    console.log(`server running on localhost:${PORT}`);
})