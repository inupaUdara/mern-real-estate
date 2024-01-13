import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.publicdomainpictures.net%2Fen%2Fhledej.php%3Fhleda%3Dprofile&psig=AOvVaw3rQc-6K2h1T8maDq1rHzHT&ust=1705263666158000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjfs6uY24MDFQAAAAAdAAAAABAI",
    }

},{ timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;