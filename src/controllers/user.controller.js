const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    userService.validateUser(req.body);

    const token = await userService.createUser(req.body);
    
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
};

module.exports = {
  createUser,
};