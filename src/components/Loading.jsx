import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-3xl p-8">
                {/* Header skeleton */}
                <div className="animate-pulse flex items-center space-x-6 mb-12">
                    <div className="rounded-full bg-gray-300 h-20 w-20"></div>
                    <div className="flex-1 space-y-4">
                        <div className="h-6 bg-gray-300 rounded-lg w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded-lg w-1/2"></div>
                    </div>
                </div>

                {/* Stats skeleton */}
                <div className="animate-pulse flex justify-between mb-12">
                    <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
                    <div className="w-96 h-48 bg-gray-300 rounded-lg"></div>
                </div>

                {/* Content blocks skeleton */}
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
};

export default Loading;
