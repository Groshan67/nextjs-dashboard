"use client";
import React, { useState } from "react";
import PromptInput from "@/app/dashboard/healthai/PromptInput";
import ResponseSkeleton from "@/app/ui/skeletons"


const Home: React.FC = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [model, setModel] = useState<string>("gpt-3.5-turbo");
    const [file, setFile] = useState<File | null>(null);
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleAPICall = async () => {
        if (!prompt.trim() && !file) {
            alert("Please provide a prompt or upload a file.");
            return;
        }

        setLoading(true);
        setResponse(null);

        const formData = new FormData();
        formData.append("model", model);
        formData.append("prompt", prompt);
        if (file) formData.append("file", file);

        try {
            const res = await fetch("/api/openai", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Failed to fetch the API");
            }

            const data: { message: string } = await res.json();
            setResponse(data.message);
        } catch (error) {
            console.error("Error fetching API:", error);
            setResponse("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">چطور می تونم کمکتون کنم؟</h1>
            <PromptInput
                prompt={prompt}
                setPrompt={setPrompt}
                model={model}
                setModel={setModel}
                onSubmit={handleAPICall}
                isLoading={loading}
                onFileUpload={setFile}
            />
            <ResponseSkeleton isLoading={loading} response={response} />
        </div>
    );
};



export default function Page() {
    return <Home />;
};