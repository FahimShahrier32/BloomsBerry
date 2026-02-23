'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const leftNavItems = [
    { name: 'Origins', href: '/#about' },
    { name: 'Menu', href: '/menu' },
];

const rightNavItems = [
    { name: 'Visuals', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
];

const allNavItems = [...leftNavItems, ...rightNavItems];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);

            // Update scroll progress
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollY / docHeight : 0;
            setScrollProgress(progress);

            // Update active section based on scroll position
            if (isHomePage) {
                const sections = ['about', 'gallery', 'contact'];
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 150 && rect.bottom >= 150) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const handleNavClick = (href: string) => {
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const isActive = (href: string) => {
        if (href.startsWith('/#')) {
            const section = href.replace('/#', '');
            return activeSection === section;
        }
        return pathname === href;
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${isScrolled || !isHomePage
                        ? 'backdrop-blur-xl bg-[#2D3A2F]/90 border-b border-white/10 shadow-2xl py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto w-full px-4 md:px-8">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-3 items-center gap-8">
                        {/* Left Navigation */}
                        <div className="flex items-center gap-8">
                            {leftNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.href.startsWith('/#')) {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }
                                    }}
                                    className={`relative text-white font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 group ${isActive(item.href) ? 'text-[#AFC8B2]' : 'hover:text-[#AFC8B2]'
                                        }`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#AFC8B2] transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </Link>
                            ))}
                        </div>

                        {/* Center Logo */}
                        <div className="flex flex-col items-center justify-center">
                            <Link href="/" className="flex flex-col items-center group">
                                <motion.div
                                    className="relative transition-all duration-300"
                                    animate={{
                                        height: isScrolled ? 60 : 85,
                                        width: isScrolled ? 220 : 300
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="Bloomsberry"
                                        fill
                                        className="object-contain brightness-0 invert"
                                        priority
                                    />
                                </motion.div>
                            </Link>
                        </div>

                        {/* Right Navigation */}
                        <div className="flex items-center justify-end gap-8">
                            {rightNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.href.startsWith('/#')) {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }
                                    }}
                                    className={`relative text-white font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 group ${isActive(item.href) ? 'text-[#AFC8B2]' : 'hover:text-[#AFC8B2]'
                                        }`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#AFC8B2] transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-center justify-between">
                        {/* Mobile Logo */}
                        <div className="flex-1 flex justify-start">
                            <Link href="/" className="relative w-40 h-14">
                                <Image
                                    src="/logo.png"
                                    alt="Bloomsberry"
                                    fill
                                    className="object-contain brightness-0 invert"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:bg-white/10 relative"
                                    aria-label="Open menu"
                                >
                                    <AnimatePresence mode="wait">
                                        {isOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="h-6 w-6" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="h-6 w-6" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[320px] bg-[#2D3A2F] border-l border-[#AFC8B2]/20 p-0">
                                <SheetHeader className="p-6 border-b border-[#AFC8B2]/20 bg-[#2D3A2F]/50">
                                    <SheetTitle className="flex justify-center">
                                        <div className="relative w-48 h-16">
                                            <Image
                                                src="/logo.png"
                                                alt="Bloomsberry"
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>

                                {/* Navigation Links */}
                                <div className="flex flex-col py-4">
                                    {allNavItems.map((item, index) => (
                                        <SheetClose asChild key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={(e) => {
                                                    if (item.href.startsWith('/#')) {
                                                        e.preventDefault();
                                                        handleNavClick(item.href);
                                                    }
                                                }}
                                                className={`px-6 py-4 text-white hover:bg-[#5F8F72]/20 transition-all duration-300 border-b border-[#AFC8B2]/10 font-body tracking-wider text-sm flex items-center justify-between group ${isActive(item.href) ? 'text-[#AFC8B2] bg-[#5F8F72]/10' : ''
                                                    }`}
                                            >
                                                <span className="uppercase">{item.name}</span>
                                                {isActive(item.href) && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#AFC8B2]" />
                                                )}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="px-6 py-4 border-t border-[#AFC8B2]/10">
                                    <p className="text-white/50 text-xs uppercase tracking-widest mb-4 font-body">Follow Us</p>
                                    <div className="flex gap-4">
                                        <Link
                                            href="https://www.facebook.com/bloomsberrybd/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#AFC8B2] hover:bg-[#AFC8B2]/10 transition-all duration-300"
                                            aria-label="Visit our Facebook page"
                                        >
                                            <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/bloomsberrycafe/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#AFC8B2] hover:bg-[#AFC8B2]/10 transition-all duration-300"
                                            aria-label="Visit our Instagram page"
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="px-6 py-4 border-t border-[#AFC8B2]/10 space-y-3">
                                    <a href="tel:+8801234567890" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm">
                                        <Phone className="w-4 h-4 text-[#AFC8B2]" />
                                        <span className="font-body">+880 1234 567890</span>
                                    </a>
                                    <div className="flex items-start gap-3 text-white/70 text-sm">
                                        <MapPin className="w-4 h-4 text-[#AFC8B2] mt-0.5 flex-shrink-0" />
                                        <span className="font-body">House-04, Road-10, Dhanmondi, Dhaka</span>
                                    </div>
                                </div>


                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#AFC8B2] z-[1001] origin-left"
                style={{ scaleX: scrollProgress }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default Navbar;

