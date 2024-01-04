import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserModel } from "./models/user.js";


const app = express();

dotenv.config();
app.use(cors());

app.get("/api/login", (req, res) => {
  const data = [
    {
    name: "ali",
    },
  ];
  res.send(data);
});
app.use(express.json());
app.post("/api/contactus", async (req, res) => {
  try {
    const {username, email, message } = req.body;
    const newUser = new UserModel({username, email, message });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//commemts add
app.delete("/api/delte",(req,res)=>{
  const id = UserModel.find(_id)
})
mongoose.connect("mongodb+srv://muhammadtahib:Sybrid098@canvasdigital.rvnqiwu.mongodb.net/");
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Port Running ${PORT}`);
});
