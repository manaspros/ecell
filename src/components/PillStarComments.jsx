import React, { useState } from "react";

function PillStarComments() {
    // Updated list of random words for each rating
    const commentsData = {
        1: ["Very negative comment 1", "Very negative comment 2", "Very negative comment 3"],
        2: ["Negative comment 1", "Negative comment 2", "Negative comment 3"],
        3: ["Neutral comment 1", "Neutral comment 2", "Neutral comment 3"],
        4: ["Positive comment 1", "Positive comment 2", "Positive comment 3"],
        5: ["Very positive comment 1", "Very positive comment 2", "Very positive comment 3"],
    };

    const [selectedRating, setSelectedRating] = useState(null);

    return (
        <div className="mt-10">
            <div className="flex gap-3">
                {["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"].map((label, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setSelectedRating(index + 1)}
                        className={`px-4 py-2 rounded-full border border-gray-300 focus:outline-none ${selectedRating === index + 1
                            ? "bg-yellow-500 text-white"
                            : "bg-white text-gray-700"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {selectedRating && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-3">
                        Comments for {["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"][selectedRating - 1]}:
                    </h3>
                    {commentsData[selectedRating].map((comment, index) => (
                        <div key={index} className="border rounded-md p-3 mb-2 shadow-sm">
                            <p className="text-sm font-bold mb-1">User {index + 1}</p>
                            <p className="text-gray-700">{comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PillStarComments;
