const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Ensure routes.js also uses module.exports
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// Logging Middleware
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Local dev on port ${PORT}`));
}
// Routes
app.use("/api", routes);

// Export for Vercel
module.exports = app;