import React, { FC, ChangeEvent } from "react";
import { FaUpload } from "react-icons/fa"; // استفاده از FontAwesome برای آیکون

interface PromptInputProps {
    prompt: string;
    setPrompt: (value: string) => void;
    model: string;
    setModel: (value: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
    onFileUpload: (file: File | null) => void;
}

const PromptInput: FC<PromptInputProps> = ({
    prompt,
    setPrompt,
    model,
    setModel,
    onSubmit,
    isLoading,
    onFileUpload,
}) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileUpload(e.target.files[0]); // ارسال فایل به والد
        }
    };

    return (
        <div className="w-full max-w-md">
            {/* انتخاب مدل */}
            <select
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                disabled={isLoading}
            >
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="gpt-4">GPT-4</option>
                <option value="text-davinci-003">Text Davinci 003</option>
            </select>

            {/* ورودی متن با آیکون آپلود */}
            <div className="relative">
                <textarea
                    className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Enter your prompt here..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={isLoading}
                />

                {/* آیکون آپلود */}
                <label
                    htmlFor="file-upload"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-blue-500"
                >
                    <FaUpload size={20} />
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        disabled={isLoading}
                    />
                </label>
            </div>

            {/* دکمه ارسال */}
            <button
                onClick={onSubmit}
                className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300"
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Submit"}
            </button>
        </div>
    );
};

export default PromptInput;
