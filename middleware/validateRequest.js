const { check, validationResult } = require('express-validator');

const validateUser = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('age').isNumeric().withMessage('Age must be a number'),
  check('phone').isNumeric().withMessage('Phone must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser };
