import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    title: {
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
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.service || mongoose.model('service ', serviceSchema)
export default Dataset

//