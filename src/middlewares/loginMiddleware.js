require('dotenv').config();
const User = require('../models/UsuarioModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = async function loginMiddleware(req, res, next) {
try{
    const { username, password } = req.body
    const user = await User.findOne({ username: username });
    if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' })
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(400).json({ error: 'Senha incorreta' })
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: '1h' // expires in 24 hours
    });
    res.status(200).json({ token });
} catch (error) {
    res.status(500).json({ error: "Login failed" });
    }
};