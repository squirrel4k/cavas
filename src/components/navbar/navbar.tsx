import React from "react";

export const Navbar: React.FC<any> = () => (
    <aside className="hidden sm:flex sm:flex-col" data-testid="navbar">
        <a href="#"
           className="inline-flex items-center justify-center h-20 w-20 bg-blue-900 hover:bg-purple-500 focus:bg-purple-500">
            <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.83 441.24" className="h-12 w-12">
                <path  fill="#fff" d="M417.43,0C382.42,0,354.05,28.38,354.05,63.38c0,1.07,.03,2.14,.08,3.2H127.71c.03-.88,.06-1.77,.06-2.66C127.75,28.63,99.14,.04,63.85,.06,28.57,.08-.02,28.7,0,63.98c.02,35.28,28.64,63.87,63.92,63.85,2.81,0,5.62-.19,8.4-.56l119.13,204.3c-25.32,24.52-25.97,64.92-1.45,90.24,24.52,25.32,64.92,25.97,90.24,1.45,25.32-24.52,25.97-64.92,1.45-90.24-.32-.33-.65-.66-.98-.99l119.6-207.62c33.71,9.45,68.69-10.21,78.15-43.91,9.45-33.71-10.21-68.69-43.91-78.15C428.97,.79,423.21,0,417.43,0ZM59.62,50.37c0-13.06,10.59-23.64,23.64-23.64,13.06,0,23.64,10.59,23.64,23.64,0,13.05-10.57,23.63-23.62,23.64-13.06,.01-23.65-10.56-23.67-23.62,0,0,0-.02,0-.02ZM254.34,387.71c-13.06,0-23.64-10.59-23.64-23.64s10.59-23.64,23.64-23.64c13.06,0,23.64,10.59,23.64,23.64s-10.59,23.64-23.64,23.64h0Zm8.12-68.3c-16.7-7.65-35.89-7.74-52.67-.26L93.89,120.35c12.97-6.92,23.17-18.1,28.89-31.64h236.52c4.55,10.41,11.8,19.42,21,26.08l-117.86,204.62ZM436.81,74.01c-13.06,0-23.65-10.57-23.66-23.63,0-13.06,10.57-23.65,23.63-23.66,13.06,0,23.65,10.57,23.66,23.63h0c0,13.07-10.58,23.65-23.63,23.66Z"/>
            </svg>
        </a>
        <div className="flex-grow flex flex-col justify-between text-white bg-blue-900">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">

            </div>
        </div>
    </aside>
);