import connectDB from '../../../backend/utils/connectDB'
import Services from '../../../backend/models/serviceModel'


connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getServices(req, res)
            break;
    }
}

const getServices = (req, res) => {
    try {
        const services = await Services.find()
        res.json({
            status: 'success',
            results: services.length,
            services
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}