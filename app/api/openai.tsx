import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false, // غیرفعال کردن bodyParser برای کار با فایل‌ها
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error("Error parsing form data:", err);
            return res.status(500).json({ message: "Error parsing form data" });
        }

        const { model, prompt } = fields;

        // بررسی اینکه فایل یک فایل تکی است یا undefined
        const fileField = files.file;
        const file = Array.isArray(fileField) ? fileField[0] : fileField; // اگر آرایه بود، اولین فایل را انتخاب می‌کنیم.

        try {
            let fileContentBase64: string | undefined = undefined;

            // اگر فایل وجود دارد، محتوای آن را به base64 تبدیل کنید
            if (file) {
                const fileBuffer = fs.readFileSync(file.filepath);
                fileContentBase64 = fileBuffer.toString("base64");
            }

            // ارسال درخواست به OpenAI API
            const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: model || "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content: prompt || "",
                        },
                    ],
                    temperature: 0.7,
                    max_tokens: 100,
                }),
            });

            if (!openaiResponse.ok) {
                const errorDetails = await openaiResponse.json();
                console.error("OpenAI API error:", errorDetails);
                throw new Error("Failed to fetch OpenAI API");
            }

            const data = await openaiResponse.json();

            // پاسخ OpenAI API را به کلاینت ارسال کنید
            res.status(200).json({
                response: data.choices[0].message?.content.trim() || "No response",
                fileContentBase64, // محتوای فایل آپلودی به base64 (اختیاری)
            });
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            res.status(500).json({ message: "Error calling OpenAI API" });
        }
    });
}
