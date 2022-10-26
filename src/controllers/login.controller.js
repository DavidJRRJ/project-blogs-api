const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const { email, password } = loginService.validateBody(req.body);

  const token = await loginService.validateLogin({ email, password });

  return res.status(200).json({ token });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  login,
};