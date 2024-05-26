import { Schema, models, model } from "mongoose";
import { z } from "zod";

export interface INotes extends Document {
    _id: string,
    name: string,
    description: string
}

const NoteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Notes = models.Notes || model("Notes", NoteSchema)

export default Notes