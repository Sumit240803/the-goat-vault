const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");

dotenv.config();

mongoose.connect(process.env.DEV).then(()=>console.log("DB connected"))
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.use("/api/auth" , authRouter);
app.use("/api/product" , productRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
