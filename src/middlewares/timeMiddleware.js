const timeMiddleware = (req, res, next) => {
  console.log("url:", req.url);
  console.log("time:", new Date());
  next();
};

module.exports = timeMiddleware;
