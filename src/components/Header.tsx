import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <header
            className="mx-auto"
        >
            <div className="flex justify-between max-w-5xl m-auto py-9 mb-16">
                <h1>Todo React TS</h1>
                <div className="flex justify-center align-middle gap-2">
                    <a href="https://github.com/alexhiraga" target="_blank" rel="noreferrer">
                        <FaGithub className="cursor-pointer text-3xl text-neutral-700 hover:text-neutral-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexhiraga/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="cursor-pointer text-3xl text-neutral-700 hover:text-neutral-600 transition-colors" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header