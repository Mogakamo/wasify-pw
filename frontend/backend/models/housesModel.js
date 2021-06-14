import mongoose from 'mongoose'

const houseSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

let Dataset = mongoose.models.house || mongoose.model('house', houseSchema)
export default Dataset

//