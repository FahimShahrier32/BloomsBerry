'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Menus', href: '/menu' },
    { name: 'Locate', href: '/contact' },
    { name: 'Contact', href: '/contact' },
];

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 pt-0 pb-0">
            {/* Main Footer Content */}
            <div className="bg-[#2D3A2F] py-12 md:py-16">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Border Frame */}
                    <div className="border border-white/20 rounded-lg px-8 md:px-16 py-10 md:py-12">
                        {/* Centered Logo */}
                        <div className="flex flex-col items-center justify-center mb-8">
                            <div className="relative w-64 h-20">
                                <Image
                                    src="/logo.png"
                                    alt="Bloomsberry"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="mb-8">
                            <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/80 hover:text-white font-body text-sm md:text-base tracking-wide transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social Media Links */}
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <Link
                                href="https://www.facebook.com/bloomsberrybd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-[#AFC8B2] hover:bg-[#AFC8B2]/10 transition-all duration-300"
                                aria-label="Visit our Facebook page"
                            >
                                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/bloomsberrycafe/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-[#AFC8B2] hover:bg-[#AFC8B2]/10 transition-all duration-300"
                                aria-label="Visit our Instagram page"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
                            {/* Copyright */}
                            <p className="text-white/60 font-body text-sm order-2 md:order-1">
                                © 2026 Bloomsberry. All Rights Reserved.
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 order-1 md:order-2">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-[#7FA88A] bg-transparent hover:bg-[#AFC8B2]/10 text-white hover:text-white rounded-md px-6 py-2 font-body tracking-wide transition-all duration-300"
                                >
                                    <Link href="/menu">Order Online</Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-[#7FA88A] bg-transparent hover:bg-[#AFC8B2]/10 text-white hover:text-white rounded-md px-6 py-2 font-body tracking-wide transition-all duration-300"
                                >
                                    <Link href="/contact">Reservation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

