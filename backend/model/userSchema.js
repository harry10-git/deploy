const mongoose = require("mongoose"); 
  
const userSchema = mongoose.Schema({ 
    email: {type: String, },

    name: { type: String,  }, 
    phoneNo: { type: Number,  }, 
    regNo: { type: Number,  }, 
    branch: { type: String, }, 
    learnerid: { type: String, }, 
    upiID: { type: String, }, 
    txnID: { type: String, }, 
    screenshot: {type: String, }, 
    workshops: {type: [String]},
}, {timestamps: true});
  
const userdb = mongoose.model("users", userSchema); 
  
module.exports = userdb; 