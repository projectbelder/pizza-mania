import React, { useState } from 'react';
import Logo from '../../Assets/Vector.png'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div class="text-color font font-bold text-xl">
            <div class="lg:px-12 py-5 mx-auto">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <img src={Logo}  alt="Logo"/>
                        <span class="ml-2 text-xl font-bold tracking-wide text-color">
                            mania
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex text-color font-bold">
                        <li>
                            <a
                                href="/"
                                aria-label="Home"
                                title="Home"
                                class="font-medium text-color tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu"
                                title="Menu"
                                class="font-medium tracking-wide text-color  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label="Menu"
                                title="Menu"
                                class="font-medium tracking-wide text-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Specials & Coupons
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                aria-label=" Contact Us"
                                title=" Contact Us"
                                class="font-medium tracking-wide text-color  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img src={Logo} alt="Logo" />
                                                <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
                                                    mania
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4 font-bold text-4xl">
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Home"
                                                    title="Our product"
                                                    class="font-medium tracking-wide text-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Menu"
                                                    title="Menu"
                                                    class="font-medium tracking-wide text-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Menu
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label="Menu"
                                                    title="Menu"
                                                    class="font-medium tracking-wide text-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Specials & Coupons
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    aria-label=" Contact Us"
                                                    title=" Contact Us"
                                                    class="font-medium tracking-wide text-color transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Contact Us
                                                </a>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;