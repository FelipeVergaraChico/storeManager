const validateData = (req, res, next) => {
  const sales = req.body;

  const error = sales.some((s) => s.quantity <= 0);

  if (error) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = validateData;