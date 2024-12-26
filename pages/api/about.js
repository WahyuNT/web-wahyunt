import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Path ke file JSON
      const filePath = path.join(process.cwd(), "json", "portfolio.json");

      try {
        // Baca file JSON
        const jsonData = fs.readFileSync(filePath, "utf8");
        const data = JSON.parse(jsonData);

        res.status(200).json({ status: 200, data });
      } catch (error) {
        res.status(500).json({ status: 500, message: "Error reading JSON file" });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
