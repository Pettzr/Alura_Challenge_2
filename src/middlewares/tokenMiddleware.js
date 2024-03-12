app.use((req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader!== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
  
      try {
        const decoded = jwt.verify(bearerToken, 'secretKey');
        req.user = decoded;
        next();
      } catch (err) {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  });