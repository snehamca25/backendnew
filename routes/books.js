import Book from "../models/Book.js";

import express from "express";

const router = express.Router();

// Get ALL books with details
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();  // Fetch all books
    res.json(books);                  // Return full details
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Get ONE book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id); // use req.params.id
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
});


router.post("/",async(req,res)=>{
    const{title,author,year}=req.body;

    const newBook = new Book({title,author,year});
    await newBook.save();

    res.json(newBook);
});


router.put("/:id",async(req, res)=>{
    const {title,author,year}=req.body;

    const updated = await Book.findByIdAndUpdate(
        req.params.id,
        
        
        {title, author, year},
        {new:true}
    );

    res.json(updated);
});


router.delete("/:id",async(req,res)=>{
    await
    Book.findByIdAndDelete(req.params.id);
    res.json({message:"book deleted"});
});

export default router;