import React, { useState } from "react";
import { IconStar } from "@tabler/icons-react";

function StarComments() {
    // Sample comments for each rating
    const commentsData = {
        1: ["Poor service", "Not satisfied"],
        2: ["Could be better", "Below average"],
        3: ["Average experience", "Okayish"],
        4: ["Good service", "Satisfied"],
        5: ["Excellent!", "Highly recommended"],
    };

    const [selectedRating, setSelectedRating] = useState(null);

    return (
        <div className="mt-10">
            <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className="focus:outline-none"
                    >
                        <IconStar
                            className={`w-8 h-8 ${rating <= selectedRating ? "text-yellow-500" : "text-gray-300"}`}
                        />
                    </button>
                ))}
            </div>
            {selectedRating && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                        Comments for {selectedRating} Star{selectedRating > 1 && "s"}:
                    </h3>
                    <ul className="list-disc ml-6 mt-2">
                        {commentsData[selectedRating].map((comment, index) => (
                            <li key={index} className="text-gray-700">
                                {comment}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StarComments;
