const express = require('express');
const router = express.Router();

// Dummy AI response
router.post('/query', (req, res) => {
    const { message } = req.body;
    const aiResponse = `DuckSmart AI says: Received "${message}" and processing on-chain.`;
    res.json({ reply: aiResponse });
});

module.exports = router;
