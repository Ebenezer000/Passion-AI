

import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = 3000;

// Use environment variables for sensitive data
const API_KEY = process.env.GOOGLE_API_KEY || 'AIzaSyAXnoGO8DTABahT5veICnw2DOaL_t_VWc4';

// Middleware for CORS
app.use(cors({
    origin: 'passion-ai.vercel.app', // Allow requests from this frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true // Allow cookies if needed
}));

app.use(express.json());

// POST route to handle AI requests
app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // const prompt = "Write a story about a magic backpack.";

        const result = await model.generateContent(prompt);

        res.status(200).json({ result: result.response.text() });
        console.log(result.response.text())
    } catch (error) {
        console.error('Error generating AI response:', error);
        res.status(500).json({ error: 'Failed to process the request.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


