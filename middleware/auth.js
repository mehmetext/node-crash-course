const auth = async (req, res, next) => {
  try {
    console.log("Auth kontrolü middleware...");
    next();
  } catch (error) {
    res.status(500).json({ message: "hata var" });
  }
};

module.exports = auth;
