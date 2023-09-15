import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/50">
                <p className="font-bold black mb-2 text-xs">
                    &copy; {currentYear} Mahdi Fazeli. All right reserved.
                </p>
                <p className="text-xs">
                    <span className="font-bold">About Mahdi Fazeli:</span> Professional software & web developer which excel at creating cutting edge application and website. 
                </p>
        </footer>
    )
}
