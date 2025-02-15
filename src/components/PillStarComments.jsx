import React, { useState } from "react";

function PillStarComments() {
    // Updated list of random words for each rating
    const commentsData = {
        1: ["Green apple", "Silly penguin", "Adventure awaits"],
        2: ["Curious kiwi", "Minimal meltdown", "Zealous zebra"],
        3: ["Floating feathers", "Running rhino", "Sunny side up"],
        4: ["Happy hippo", "Tiny tornado", "Candy castle"],
        5: ["Perfect paradise", "Lively llama", "Whispering willows"],
    };

    const [selectedRating, setSelectedRating] = useState(null);

    return (
        <div className="mt-10">
            <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`px-4 py-2 rounded-full border border-gray-300 focus:outline-none ${selectedRating === rating
                                ? "bg-yellow-500 text-white"
                                : "bg-white text-gray-700"
                            }`}
                    >
                        {rating} Star{rating > 1 && "s"}
                    </button>
                ))}
            </div>
            {selectedRating && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-3">
                        Comments for {selectedRating} Star{selectedRating > 1 && "s"}:
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
