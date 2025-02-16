import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { IconStar } from "@tabler/icons-react";
import { SidebarDemo } from "./sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import youtubeLogo from "../assets/youtube_logo_icon.png";
import StarComments from "../components/PillStarComments";
import Loading from "../components/Loading";
import GeminiChat from "../components/GeminiChat";

export const calculateAverage = (data) => {
    // If data is null or empty, return 0
    if (!data || Object.keys(data).length === 0) return 0;

    let sum = 0;
    let count = 0;

    // Loop through each key-value pair
    Object.entries(data).forEach(([key, value]) => {
        // Convert value to number if it's a string
        const numValue = Number(value);
        // Only add if it's a valid number
        if (!isNaN(numValue)) {
            sum += key * numValue;
            count += numValue;
        }
    });

    // Return average rounded to 2 decimal places
    return count > 0 ? Number((sum / count).toFixed(2)) : 0;
};

// Add convertMarkdown helper function
const convertMarkdown = (text) =>
    text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br/>");

function Analysis() {
    const [searchParams] = useSearchParams();
    const [videoUrl] = useState(searchParams.get('url'));
    const [loading, setLoading] = useState(true);
    const [analysisData, setAnalysisData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                setLoading(true);
                const response = await axios.post('https://sf-mvji.onrender.com/getContentAnalysis', {
                    url: videoUrl
                });
                setAnalysisData(response.data);
            } catch (err) {
                setError('Failed to fetch analysis');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (videoUrl) {
            fetchAnalysis();
        }
    }, [videoUrl]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-8">{error}</div>;
    }

    return (
        <div className="flex h-screen">
            <div className="w-64">
                <SidebarDemo />
            </div>
            <div className="flex-1 bg-white relative p-6">
                <div className="mt-20 w-full max-w-3xl">
                    <div className="mb-8 flex items-center gap-3">
                        <img
                            src={youtubeLogo}
                            alt="YouTube Logo"
                            className="w-10 h-10"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-left">
                                YouTube Video Analysis
                            </h1>
                            <p className="text-gray-500 mt-2 text-sm truncate">
                                {videoUrl}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-16">
                        <div className="flex items-center gap-5">
                            <IconStar className="w-24 h-24 text-yellow-500" />
                            <span className="text-5xl font-bold">
                                {calculateAverage(analysisData?.comments.stats) || "N/A"}
                            </span>
                            <span className="text-xl pt-6">/5</span>
                        </div>
                        <div>
                            <PieChart
                                series={[
                                    {
                                        data: Object.keys(analysisData?.comments.stats).map(k => {
                                            return {
                                                id: k,
                                                value: analysisData?.comments.stats[k],
                                                label: ["very negative", "negative", "neutral", "positive", "very positive"][k - 1]
                                            }
                                        }) || [],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div>
                            <h2 className="text-4xl font-bold">
                                Summary
                            </h2>
                            <p
                                className="ml-4 mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: convertMarkdown(analysisData?.summary || "No summary available.")
                                }}
                            />
                        </div>
                        <div className="mt-8">
                            <h2 className="text-4xl font-bold">
                                What people want
                            </h2>
                            <p
                                className="ml-4 mt-2"
                                dangerouslySetInnerHTML={{
                                    __html: convertMarkdown(analysisData?.suggestions || "No suggestions available.")
                                }}
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-left pt-16">
                        Comments
                    </h1>
                    <StarComments comments={analysisData?.comments.comments} />
                </div>
            </div>
            {/* Pass videoUrl to GeminiChat */}
            <GeminiChat videoUrl={videoUrl} />
        </div>
    );
}

export default Analysis;