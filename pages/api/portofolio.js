

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("web_wahyunt");
    switch (req.method) {
        case "GET":
            const allPosts = await db.collection("portofolios").find({}).toArray();
            res.json({ status: 200, data: allPosts });
            break;
    }
}