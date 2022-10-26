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

const getAllUser = async (_req, res) => {
    const users = await userService.getAllUser();

    return res.status(200).json(users);
};

const getIdUser = async (req, res) => {
  try {
    const { id } = req.params;
  
  const user = await userService.getIdUser(Number(id));

  return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getIdUser,
};