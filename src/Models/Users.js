const { default: mongoose, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  age: Number,
  profile: String,
  email: String,
  education: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: Number,
  },
  phoneNumber: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
