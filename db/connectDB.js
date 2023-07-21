const mongoose = require("mongoose")

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, console.log("Everything running smoothly, proceed to next task"))
    } catch (err) {
      console.log("db connection failed" + err)
    }
}

module.exports = {connectDB}