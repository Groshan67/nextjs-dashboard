import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error parsing form data" });
        }

        const { model, prompt } = fields;
        const file = files.file as formidable.File;

        try {
            const openaiResponse = await fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: model || "gpt-3.5-turbo",
                    prompt: prompt || "",
                    file: file ? fs.readFileSync(file.filepath).toString("base64") : undefined,
                    max_tokens: 100,
                }),
            });

            if (!openaiResponse.ok) {
                throw new Error("Failed to fetch OpenAI API");
            }

            const data = await openaiResponse.json();
            res.status(200).json({ message: data.choices[0].text.trim() });
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            res.status(500).json({ message: "Error calling OpenAI API" });
        }
    });
}
