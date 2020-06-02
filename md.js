module.exports = (req, res, next) => {
  if (req.method == 'POST' && req.path == '/login') {
    // || req.method == 'PUT' || req.method == 'GET' || req.method == 'PATCH' || req.method == 'DELETE'
    if (req.body.username === 'j@bizzarro.org' && req.body.password === 'jonathan97') {
      let url = 'http://192.168.178.22:3000/user?email=' + req.body.username;
      request({ url: url, json: true }, (err, response, body) => {
        res.send(body);
      });
      res.status(200).json({
        "authtoken": Math.random().toString(36).substring(7)
      })
    } else {
      res.status(400).json({
        error: 'Wrong credentials. Please try again. BS rock'
      })
    }
  } else {
    next()
  }
}