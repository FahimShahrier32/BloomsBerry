'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faQuoteLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#F8FAF8]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        src="/videos/about-us.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D3A2F]/20 to-[#F8FAF8]" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="text-white/80 font-semibold tracking-[0.3em] uppercase text-sm mb-6 block">
                        Established 2025
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display text-white leading-tight mb-8">
                        The Art of Coffee <br /> & Conversation
                    </h1>
                    <div className="w-24 h-1 bg-[#5F8F72] mx-auto rounded-full mb-12" />
                </motion.div>

                {/* Subtle Scroll Guide */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 60, opacity: 0.4 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="w-[1px] bg-white mx-auto absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
                />
            </section>

            {/* The Story Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Visual "Blooms" (Soft Background Blurs) */}
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#5F8F72]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[#5F8F72]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        className="space-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Narrative Block 1 */}
                        <motion.div variants={fadeInUp} className="text-center space-y-6">
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-[#5F8F72]/20 text-4xl mb-4" />
                            <h2 className="text-3xl md:text-4xl font-display text-[#2D3A2F]">A New Standard of Refinement</h2>
                            <p className="text-xl text-[#5F6B61] leading-relaxed max-w-2xl mx-auto italic">
                                &quot;Established in 2025, Bloomsberry was born from a singular vision: to redefine the culinary experience in Dhanmondi.&quot;
                            </p>
                        </motion.div>

                        {/* Botanical Separator */}
                        <div className="flex justify-center items-center gap-4 py-8">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#5F8F72]/20" />
                            <FontAwesomeIcon icon={faLeaf} className="text-[#5F8F72]/30 text-sm rotate-45" />
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#5F8F72]/20" />
                        </div>

                        {/* Narrative Block 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                            <motion.div variants={fadeInUp} className="space-y-6 order-2 md:order-1">
                                <h3 className="text-2xl font-display text-[#2D3A2F]">The Fusion of Two Worlds</h3>
                                <p className="text-[#5F6B61] leading-relaxed">
                                    Our journey began with a search for the perfect harmony between two worlds.
                                    We saw an opportunity to bring a level of culinary sophistication that blends the
                                    bold, complex profiles of Pan-Asian flavors with the refined techniques of Chinese fusion.
                                    Every dish is a curated experience, designed to surprise the palate.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
                                <Image
                                    src="/gallery-2.webp"
                                    alt="Fusion Cuisine"
                                    fill
                                    className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>

                        {/* Botanical Separator */}
                        <div className="flex justify-center items-center gap-4 py-8">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#5F8F72]/20" />
                            <FontAwesomeIcon icon={faLeaf} className="text-[#5F8F72]/30 text-sm -rotate-45" />
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#5F8F72]/20" />
                        </div>

                        {/* Narrative Block 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                            <motion.div variants={fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gallery-3.webp"
                                    alt="Specialty Coffee"
                                    fill
                                    className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                            <motion.div variants={fadeInUp} className="space-y-6 text-right md:text-left">
                                <h3 className="text-2xl font-display text-[#2D3A2F]">Coffee as a Craft</h3>
                                <p className="text-[#5F6B61] leading-relaxed">
                                    At Bloomsberry, coffee isn&apos;t just a beverage—it&apos;s a craft. From the selection of premium
                                    beans to the meticulous pour-over techniques, we treat every cup with the same
                                    reverence as our signature fusion dishes. We believe that a great conversation
                                    deserves a great canvas.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Visual Showcase (Vibe) */}
            <section className="bg-[#2D3A2F] py-24 md:py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl font-display text-white">The Bloomsberry Vibe</h2>
                        <p className="text-[#AFC8B2] text-lg max-w-2xl mx-auto">
                            Step into a sanctuary of glass, modern design, and botanical freshness.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 overflow-hidden">
                    {[
                        "/gallery-1.webp",
                        "/hero-cafe.jpg",
                        "/about-img.webp",
                        "/gallery-2.webp"
                    ].map((src, i) => (
                        <motion.div
                            key={src}
                            className="aspect-[3/4] relative rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={src}
                                alt={`Cafe Vibe ${i + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Path to Home */}
            <section className="py-24 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-display text-[#2D3A2F]">Ready to join the conversation?</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-[#5F8F72] text-white rounded-full font-semibold hover:bg-[#4A7258] transition-all shadow-lg hover:shadow-[#5F8F72]/20 flex items-center gap-2 group"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/#menu"
                            className="px-8 py-4 border-2 border-[#5F8F72] text-[#5F8F72] rounded-full font-semibold hover:bg-[#5F8F72] hover:text-white transition-all flex items-center gap-2 group"
                        >
                            View Our Menu
                            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
