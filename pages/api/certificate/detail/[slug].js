export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { slug } = req.query; // Ambil parameter slug dari URL
        const jsonData = require('../../../../public/json/certificate.json');

        const portfolioDetail = jsonData.data.find(item => item.slug === slug);

        if (!portfolioDetail) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }

        res.status(200).json({ "data": portfolioDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error reading portfolio data' });
    }
}
