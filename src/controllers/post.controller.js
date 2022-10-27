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

const postGetById = async (req, res) => {
  try {
    const { id } = req.params;
  const post = await postService.postGetById(Number(id));
  
  if (!post) { 
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(post);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  postGetAll,
  postGetById,
};