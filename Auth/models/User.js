const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String,
          required: true,
          unique: true 
        },
  password: { type: String,
              required: true 
            }, // hashed password
  name: { type: String,
         required: true 
        },
  phone: { type: String, 
           required: true 
          },
});

module.exports = mongoose.model('User', userSchema); 