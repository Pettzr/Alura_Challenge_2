const jwt = require('jsonwebtoken');

function verifyToken(req,res,next) {

    const token = req.cookies['authToken'];
    if (!token) {
        return res.status(401).json({ message: " Token não fornecido" });
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.id;
        next();
    } catch(error) {
        res.status(401).json({ error: 'Token inválido' });
    }
}

module.exports = verifyToken;