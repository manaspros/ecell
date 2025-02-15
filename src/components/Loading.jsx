import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-500">Analyzing comments...</p>
            </div>
        </div>
    );
};

export default Loading;
