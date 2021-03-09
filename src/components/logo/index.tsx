import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
    return (
        <Image
            src="/icons/grin-icon.svg"
            alt="Grin Network"
            width="96"
            height="58"
        />
    );
};
