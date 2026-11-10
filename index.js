const express = require('express');
const connectDatabase = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({
        message: 'Komik API is running',
        endpoints: {
            komik: '/api/komik'
        }
    });
});
app.use('/api', require('./routes/komikRoutes'));

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();