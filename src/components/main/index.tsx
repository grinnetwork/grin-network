import React from "react";

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-5 bg-black">
            <div className="container mx-auto">
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="text-white text-6xl mb-2">Grin Network</h1>
                    <p className="text-lg text-white mb-3">Let's raise Grin</p>
                </div>
            </div>
        </div>
    );
};
