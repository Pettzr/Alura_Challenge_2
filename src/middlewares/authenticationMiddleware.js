const jwt = require('jsonwebtoken');

function verifyToken(req,res,next) {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.id;
        next();
    } catch(error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

module.exports = verifyToken;