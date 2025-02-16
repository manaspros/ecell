import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-600 font-medium">Analyzing channel...</p>
            </div>
        </div>
    );
};

export default Loading;
