import React from "react";

const WaitlyLogo = () => {
    return (
        <div className="flex items-center space-x-2">
            {/* Custom Wait Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] rounded-full animate-waitly">
                <div className="absolute w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Waitly Text with Animation */}
            <h1 id="logo" className="logo text-2xl text-white font-extrabold">Waitly</h1>
        </div>
    );
};

export default WaitlyLogo;

