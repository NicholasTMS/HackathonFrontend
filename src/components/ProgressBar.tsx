import React from "react";

interface ProgressBarProps {
    progress: number; // Completed weeks
    totalWeeks: number; // Total weeks of course
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, totalWeeks }) => {
    const percentage = (progress / totalWeeks) * 100;
    const progressColor = percentage < 70 ? "bg-red-600" : "bg-green-600";

    return (
        <div className="relative w-full h-4 bg-gray-300 rounded-full">
            <div
                className={`absolute top-0 left-0 h-full ${progressColor} rounded-full transition-all duration-300`}
                style={{ width: `${percentage}%` }}
            />
            <span className="absolute top-0 left-0 w-full text-center text-xs text-white font-medium">
        {progress} / {totalWeeks} Weeks
      </span>
        </div>
    );
};

export default ProgressBar;
