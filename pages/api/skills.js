export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const jsonData = require('../../public/json/skills.json');

    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ message: 'Error reading portfolio data' });
  }
}
