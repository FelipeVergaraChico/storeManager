const validate = (req, res, next) => {
  const data = req.body;
  let invalid = null;
  data.forEach((s) => {
    if (!s.productId) {
      invalid = 'productId';
    }
    if (!s.quantity) {
      invalid = 'quantity';
    }
  });
  if (invalid !== null) {
    return res.status(400).json({ message: `"${invalid}" is required` });
  }
  next();
};
module.exports = validate;