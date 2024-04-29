const register = async (req, res) => {
  const { username } = req.body;
  try {
    res.status(201).json({
      status: "OK",
      message: `${username} kayıt edildi.`,
    });
  } catch (error) {
    res.status(500).json({ message: "Hata var!" });
  }
};

module.exports = { register };
