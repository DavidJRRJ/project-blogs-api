const postService = require('../services/post.service');

const postGetAll = async (_req, res) => {
  try {
    const posts = await postService.postGetAll();
    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }

  // res.status(200).json({ message: 'teste' });
};

module.exports = {
  postGetAll,
};