import mongoose from 'mongoose'

const  genreSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true}
},{
    versionKey: false,
    timestamps: true,
    toJSON:{virtual : true} ,
    toObject: {virtual : true}
});

genreSchema.virtual('Movie',{
    ref: 'Movie',
    localField: '_id',
    foreignField: 'genre'
})



export default mongoose.model('Genre', genreSchema);