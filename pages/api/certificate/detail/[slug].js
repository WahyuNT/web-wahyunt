export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { slug } = req.query; // Ambil parameter slug dari URL
        const jsonData = require('../../../../public/json/certificate.json');

        const certificateDetail = jsonData.data.find(item => item.slug === slug);

        if (!certificateDetail) {
            return res.status(404).json({ message: 'certificate not found' });
        }

        res.status(200).json({ "data": certificateDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error reading certificate data' });
    }
}
