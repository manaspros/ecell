import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { SidebarDemo } from "./sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import { IconStar, IconArrowRight } from "@tabler/icons-react";
import youtubeLogo from "../assets/youtube_logo_icon.png"; // new import

// Helper to calculate average rating from stats
export const calculateAverage = (stats) => {
    if (!stats || Object.keys(stats).length === 0) return 0;
    let sum = 0, count = 0;
    Object.entries(stats).forEach(([key, value]) => {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
            sum += key * numValue;
            count += numValue;
        }
    });
    return count > 0 ? Number((sum / count).toFixed(2)) : 0;
};

function ChannelAnalysis() {
    const [searchParams] = useSearchParams();
    const channelUrl = searchParams.get("url");
    const [channelData, setChannelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                setLoading(true);
                const response = await axios.post("https://sf-mvji.onrender.com/getChannelAnalysis", {
                    url: channelUrl,
                });
                setChannelData(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch channel data");
            } finally {
                setLoading(false);
            }
        };
        if (channelUrl) {
            fetchChannelData();
        }
    }, [channelUrl]);

    if (loading)
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    <p className="mt-4 text-lg text-gray-600 font-medium">Analyzing channel...</p>
                </div>
            </div>
        );
    if (error)
        return <div className="text-red-500 text-center mt-8">{error}</div>;

    const ratingStats = channelData?.stats;
    const averageRating = calculateAverage(ratingStats);

    return (
        <div className="flex h-screen">
            <div className="w-64">
                <SidebarDemo />
            </div>
            <div className="flex-1 bg-white relative p-6">
                <div className="mt-20 w-full max-w-3xl">
                    {/* Updated Header Section */}
                    <div className="mb-8 flex items-center gap-3">
                        <img
                            src={youtubeLogo}
                            alt="YouTube Logo"
                            className="w-10 h-10"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-left">
                                YouTube Channel Analysis
                            </h1>
                            <p className="text-gray-500 mt-2 text-sm truncate">
                                {channelUrl}
                            </p>
                        </div>
                    </div>
                    {/* Rating and Pie Chart Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-16">
                        <div className="flex items-center gap-5">
                            <IconStar className="w-24 h-24 text-yellow-500" />
                            <span className="text-4xl font-bold">{averageRating || "N/A"}</span>
                            <span className="text-xl">/5</span>
                        </div>
                        <div>
                            <PieChart
                                series={[
                                    {
                                        data: ratingStats
                                            ? Object.keys(ratingStats).map(k => ({
                                                id: k,
                                                value: ratingStats[k],
                                                label: ["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"][k - 1]
                                            }))
                                            : [],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
                    {/* Videos List Section */}
                    <div className="mt-10">
                        <h2 className="text-4xl font-bold mb-4">
                            Videos
                        </h2>
                        <div className="flex flex-col gap-6">
                            {channelData?.videos && channelData.videos.length > 0 ? (
                                channelData.videos.map((video, index) => {
                                    const targetHref = `/analysis?url=${encodeURIComponent(video.videoUrl)}`;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between border rounded-lg shadow p-4 cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = targetHref;
                                            }}
                                        >
                                            <img
                                                src={video.thumbnail || ""}
                                                alt={video.title}
                                                className="w-32 h-24 object-cover"
                                            />
                                            <div className="flex-1 mx-4">
                                                <h2 className="text-xl font-semibold">
                                                    {video.title}
                                                </h2>
                                            </div>
                                            <IconArrowRight className="w-6 h-6 text-gray-500" />
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No videos found for this channel.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChannelAnalysis;
