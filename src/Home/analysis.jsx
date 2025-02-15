import React from "react";
import { IconStar } from "@tabler/icons-react";
import { SidebarDemo } from "./sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import youtubeLogo from "../assets/youtube_logo_icon.png";
import StarComments from "../components/PillStarComments";

function Analysis() {
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
                        <h1 className="text-4xl font-bold text-left">
                            YouTube Video Analysis
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-16">
                        <div className="flex items-center gap-5">
                            <IconStar className="w-24 h-24 text-yellow-500" />
                            <span className="text-5xl font-bold">4.5</span>
                            <span className="text-xl pt-6">/5</span>
                        </div>
                        <div>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 10, label: "Series A" },
                                            { id: 1, value: 15, label: "Series B" },
                                            { id: 2, value: 20, label: "Series C" },
                                        ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-left pt-16">
                        Comment
                    </h1>
                    <StarComments />
                </div>
            </div>
        </div>
    );
}

export default Analysis;