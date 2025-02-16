import React, { useState } from "react";

function PillStarComments({ comments = [] }) {
    const [selectedRating, setSelectedRating] = useState(null);

    // Map ratings to their respective labels
    const ratingLabels = {
        1: "Very Negative",
        2: "Negative",
        3: "Neutral",
        4: "Positive",
        5: "Very Positive"
    };

    // Filter comments based on selected rating
    const filteredComments = selectedRating
        ? comments.filter(comment => comment.rating === selectedRating)
        : [];

    return (
        <div className="mt-10 pb-32">
            <div className="flex gap-3">
                {Object.entries(ratingLabels).map(([rating, label]) => (
                    <button
                        key={rating}
                        onClick={() => setSelectedRating(Number(rating))}
                        className={`px-4 py-2 rounded-full border border-gray-300 focus:outline-none ${selectedRating === Number(rating)
                            ? "bg-blue-500 text-white"
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
                        Comments for {ratingLabels[selectedRating]}:
                    </h3>
                    <div className="space-y-4">
                        {filteredComments.length > 0 ? (
                            filteredComments.map((comment, index) => (
                                <div key={index} className="border rounded-md p-3 mb-2 shadow-sm">
                                    <p className="text-sm font-bold mb-1">{comment.author}</p>
                                    <p
                                        className="text-gray-700"
                                        dangerouslySetInnerHTML={{ __html: comment.text }}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No comments found for this rating.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PillStarComments;
