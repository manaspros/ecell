import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { SidebarDemo } from "./sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import { IconStar, IconArrowRight } from "@tabler/icons-react";
import youtubeLogo from "../assets/youtube_logo_icon.png"; // new import

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
    const navigate = useNavigate();
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
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-3xl p-8">
                    <div className="animate-pulse flex items-center space-x-6 mb-12">
                        <div className="rounded-full bg-gray-300 h-20 w-20"></div>
                        <div className="flex-1 space-y-4">
                            <div className="h-6 bg-gray-300 rounded-lg w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded-lg w-1/2"></div>
                        </div>
                    </div>

                    <div className="animate-pulse flex justify-between mb-12">
                        <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
                        <div className="w-96 h-48 bg-gray-300 rounded-lg"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-gray-300 rounded-lg w-1/4"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-300 rounded-lg"></div>
                                <div className="h-4 bg-gray-300 rounded-lg w-11/12"></div>
                                <div className="h-4 bg-gray-300 rounded-lg w-4/5"></div>
                            </div>
                        </div>
                    </div>
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
                    {/* <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-16">
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
                    </div> */}
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
                                                // window.location.href = targetHref;
                                                navigate(targetHref);
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
