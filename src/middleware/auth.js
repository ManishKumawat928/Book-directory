const jwt = require("jsonwebtoken");
const SECRET_KEY = "nodeapi";
const createToken = async () => {
  const token = await jwt.sign(req.body, SECRET_KEY);
  res.status(200).send(token);
};
// createToken();
const auth = (req, res, next) => {
  try {
    token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
    } else {
      res.status(401).json({ message: "Unauthorization User" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorization User" });
  }
};

module.exports = auth;
