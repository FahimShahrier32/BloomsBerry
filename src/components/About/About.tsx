'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const About = () => {
    return (
        <section id="about" className="bg-[#F8FAF8] py-24 md:py-32 overflow-hidden">
            <motion.div
                className="max-w-[1200px] mx-auto px-4 md:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        variants={imageVariants}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#2D3A2F]/10">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                                className="relative aspect-square"
                            >
                                <video
                                    src="/videos/about-us.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </motion.div>
                            {/* Decorative overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A2F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating decorative element */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#AFC8B2]/20 rounded-full -z-10"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={contentVariants} className="space-y-8">
                        {/* Section label */}
                        <motion.div variants={itemVariants} className="flex items-center gap-2">
                            <div className="w-12 h-0.5 bg-[#5F8F72]" />
                            <span className="text-[#5F8F72] font-semibold tracking-widest uppercase text-sm">
                                About Us
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-display text-[#2D3A2F] leading-tight"
                        >
                            The Art of Coffee & Conversation
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-[#5F6B61] leading-relaxed"
                        >
                            Bloomsberry is more than just a café; it&apos;s a sanctuary for meaningful connections.
                            Located in the heart of Dhanmondi, we offer a cozy and aesthetically pleasing environment
                            where friends, families, and loved ones can gather for peaceful moments.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-2">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5F8F72] text-white rounded-full font-semibold hover:bg-[#4A7258] transition-all shadow-lg hover:shadow-[#5F8F72]/20 group"
                            >
                                Learn More
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
                        >
                            <motion.div
                                className="group p-6 bg-white rounded-2xl border border-[#AFC8B2]/20 hover:border-[#5F8F72]/30 hover:shadow-lg hover:shadow-[#AFC8B2]/10 transition-all duration-300"
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-[#AFC8B2]/20 rounded-lg group-hover:bg-[#AFC8B2]/30 transition-colors">
                                        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-[#5F8F72]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2D3A2F]">Unique Vibe</h3>
                                </div>
                                <p className="text-[#5F6B61]">Glassy, modern interior with a touch of botanical freshness.</p>
                            </motion.div>

                            <motion.div
                                className="group p-6 bg-white rounded-2xl border border-[#AFC8B2]/20 hover:border-[#5F8F72]/30 hover:shadow-lg hover:shadow-[#AFC8B2]/10 transition-all duration-300"
                                whileHover={{ y: -4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-[#AFC8B2]/20 rounded-lg group-hover:bg-[#AFC8B2]/30 transition-colors">
                                        <FontAwesomeIcon icon={faLeaf} className="w-5 h-5 text-[#5F8F72]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2D3A2F]">Fusion Cuisine</h3>
                                </div>
                                <p className="text-[#5F6B61]">Specializing in Pan Asian and Chinese Fusion dishes.</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
