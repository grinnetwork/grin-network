import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <div className="text-center py-5 bg-black">
            <ul className="flex justify-center list-none p-0 m-0">
                <li className="mx-3">
                    <a
                        href="https://github.com/grinnetwork"
                        target="_blank"
                        className="block mb-3"
                    >
                        <Image
                            src="/icons/github-icon.svg"
                            alt="Grin Github"
                            width="28"
                            height="29"
                        />
                    </a>
                </li>
                <li className="mx-3">
                    <a
                        href="https://twitter.com/grinnetwork"
                        target="_blank"
                        className="block mb-3"
                    >
                        <Image
                            src="/icons/twitter-icon.svg"
                            alt="Grin Twitter"
                            width="28"
                            height="28"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};
