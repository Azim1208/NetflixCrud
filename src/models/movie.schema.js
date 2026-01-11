import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    language:{
        type: String,
        enum:['english', 'russian', 'uzbek']
    },
    genre:{
        ref: 'Genre', 
        type: mongoose.Schema.Types.ObjectId, 
        required: true
    }
},{
    versionKey: false,
    timestamps: true,
})

export default mongoose.model('Movie', movieSchema )