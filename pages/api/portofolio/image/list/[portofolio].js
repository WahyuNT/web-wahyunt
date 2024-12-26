export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { portofolio } = req.query;
        const jsonData = require('../../../../../public/json/portofolioImages.json');

        const portofolioImagesDetail = jsonData.data.filter(item => item.portofolio === portofolio);

        if (!portofolioImagesDetail) {
            return res.status(404).json({ message: 'portofolio images not found' });
        }

        res.status(200).json({ "data": portofolioImagesDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error reading portofolio image data' });
    }
}
