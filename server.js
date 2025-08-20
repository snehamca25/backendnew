import bookRoutes from "./routes/books.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// app.use(cors());

app.use(cors({ origin: "*" }));

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));