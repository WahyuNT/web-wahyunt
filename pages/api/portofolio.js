import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // Mendapatkan path absolut ke file JSON
        const filePath = path.join(process.cwd(), 'lib', 'portofolio.json');

        // Membaca file JSON
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Mengirim response
        res.status(200).json(jsonData);
    } catch (error) {
        res.status(500).json({ message: 'Error reading portfolio data' });
    }
}