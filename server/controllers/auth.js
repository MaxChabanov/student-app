const authModule = require('../modules/auth');

module.exports.login = function (req, res) {
  res.status(200).json({
    email: req.body.email,
    password: req.body.password
  })
}

module.exports.register = async function (req, res) {
  const some = await authModule.main().catch(console.error);
  res.status(200).json(some);
}
