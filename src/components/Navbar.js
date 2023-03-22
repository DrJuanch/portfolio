import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid";
import personalBrand from '../assets/img/personalBrand2.png';
import { BrowserRouter, Link } from "react-router-dom";
// import { Projects } from "./Projects";

function Navbar() {
    return (
        <BrowserRouter>
            <header className="bg-gray-800 md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
                        <img className="w-9    object-contain" alt="My logo" src={personalBrand} />
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a href="#projects" className="mr-5 hover:text-white">
                            Projects
                        </a>
                        <a href="#skills" className="mr-5 hover:text-white">
                            Tech skills
                        </a>
                    </nav>
                    <Link to={'/Contact'}
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        ¡Hire me!
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </header>
        </BrowserRouter>
    );
};

export { Navbar };