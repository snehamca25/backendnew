import Book from "../models/Book.js";

import express from "express";

const router = express.Router();

router.get("/:id",async(req, res)=>{

    const books= await Book.find();
    res.json(books);

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