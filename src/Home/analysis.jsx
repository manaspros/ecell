import React from "react";
import { IconStar } from "@tabler/icons-react"; // icon for star
import { SidebarDemo } from "./sidebar";
import { PieChart } from "@mui/x-charts/PieChart";
import youtubeLogo from "../assets/youtube_logo_icon.png"; // new import for YouTube logo
import StarComments from "../components/PillStarComments";

function Analysis() {
    return (<>
        {/* <div className="absolute top-0 left-0 w-full z-10">
            <SidebarDemo />
        </div> */}
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-start p-6 relative z-0">
            {/* Sidebar remains fixed */}
            {/* Main content area */}
            <div className="mt-20 w-full max-w-3xl z-20">
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
                <div className="flex flex-col md:flex-row items-center justify-center gap-52 pt-16">
                    <div className="flex items-center gap-5">
                        <IconStar className="w-24 h-24 text-yellow-500" />
                        <span className="text-5xl font-bold">4.5</span> {/* Review average */}
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
    </>
    );
}

export default Analysis;