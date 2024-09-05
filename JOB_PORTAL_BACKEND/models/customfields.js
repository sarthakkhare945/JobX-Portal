import mongoose, { Schema } from "mongoose";

const CustomFields = new mongoose.Schema({
    hiringPosition: {
        type: String,
    }
})

export default mongoose.model('CustomFields',CustomFields)