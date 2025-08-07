import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },

    author:{
        type:String,
        required:true,
    },

    year:{
        type:Number,
        required:false,
    },


});

export default mongoose.model("Book",BookSchema);