export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { awardid } = req.query; // Ambil parameter awardid dari URL
        const jsonData = require('../../../../../public/json/awardimages.json');

        const awardImagesDetail = jsonData.data.filter(item => item.awardid === awardid);

        if (!awardImagesDetail) {
            return res.status(404).json({ message: 'award images not found' });
        }

        res.status(200).json({ "data": awardImagesDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error reading award data' });
    }
}
