import path from "path";
import fs from "fs";

export default function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const keyword = req.query.keyword || "";

        const filePath = path.join(process.cwd(), "public/json/portofolio.json");
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const jsonData = JSON.parse(fileContents);

        const portfolioData = jsonData.data;

        if (!Array.isArray(portfolioData)) {
            throw new Error('"data" is not an array');
        }

        const filteredData = portfolioData.filter((item) =>
            item.type.some((type) =>
                type.toLowerCase().includes(keyword.toLowerCase())
            )
        );

        res.status(200).json({ data: filteredData });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error reading portfolio data", error: error.message });
    }
}
