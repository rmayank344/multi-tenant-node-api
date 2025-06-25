const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getClientDBInstance } = require('../utils/getDbInstance');
const USERMODEL = require('../models/user_model');


// User Signup
const user_signup = async (req, res) => {
  const clientId = req.headers['x-client-key'];

  if (!clientId) return res.status(400).json({ message: "Client Id is required." });
  try {
    const { name, email, password, role } = req.body;

    const clientSequelize = await getClientDBInstance(clientId);
    if (clientSequelize == null) return res.status(404).json({ success: false, message: `Invalid Client id ${clientId}` });
    
    const user_model = USERMODEL(clientSequelize);

    const already_email = await user_model.findOne({ where: { email: email }, raw: true });
    if (already_email) return res.status(400).json({ success: false, message: "Email already exits." });

    const hashPassword = await bcrypt.hash(password, 10);

    const new_user = await user_model.create({
      name,
      email,
      password: hashPassword,
      role : role || 'user'
    });
    return res.status(201).json({
      success: true,
      data: new_user
    });
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = { user_signup };