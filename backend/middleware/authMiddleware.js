const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key'; // keep consistent with authRoutes

function authMiddleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}

module.exports = authMiddleware;
