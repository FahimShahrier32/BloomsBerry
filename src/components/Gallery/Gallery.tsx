'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { InstagramPost, BeholdResponse } from '@/types/instagram';

// Live feed URL from Behold.so
const BEHOLD_API_URL = 'https://feeds.behold.so/9UMe4HjpaSNoNJu1DvRx';

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

const headerVariants = {
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

const Gallery = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!BEHOLD_API_URL) return;
            try {
                const response = await fetch(BEHOLD_API_URL);
                if (!response.ok) throw new Error('Failed to fetch');
                const data: BeholdResponse | InstagramPost[] = await response.json();

                // Behold can return either the full response or just the array depending on URL type
                const postData = Array.isArray(data) ? data : data.posts;
                setPosts(postData.slice(0, 10)); // Ensure only 10 posts
                setLoading(false);
            } catch (err) {
                console.error('Error fetching Instagram posts:', err);
                setError(true);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Skeleton loader component
    const Skeleton = () => (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded-2xl bg-gray-200 animate-pulse" />
            ))}
        </div>
    );
    return (
        <section id="gallery" className="bg-[#F8FAF8] py-24 md:py-32">
            <motion.div
                className="max-w-[1200px] mx-auto px-4 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div variants={headerVariants} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                        <FontAwesomeIcon icon={faCamera} className="w-5 h-5 text-[#5F8F72]" />
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-[#2D3A2F] mb-4">
                        Visual Story
                    </h2>
                    <p className="text-[#5F6B61] text-lg max-w-xl mx-auto">
                        Capturing the essence of Bloomsberry through moments of coffee, conversation, and connection
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="skeleton"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Skeleton />
                            </motion.div>
                        ) : error || posts.length === 0 ? (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12 text-[#5F6B61]"
                            >
                                <p>Unable to load Instagram feed. Check out our profile directly.</p>
                                <a
                                    href="https://www.instagram.com/bloomsberrycafe/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-[#5F8F72] font-semibold hover:underline"
                                >
                                    @bloomsberrycafe
                                </a>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
                            >
                                {posts.map((post, index) => (
                                    <motion.a
                                        key={post.id || index}
                                        href={post.permalink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={imageVariants}
                                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-[#2D3A2F]/5"
                                        whileHover={{ y: -8 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <motion.div
                                            className="relative w-full h-full"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={post.sizes?.medium?.mediaUrl || post.mediaUrl}
                                                alt={post.caption || 'Instagram Post'}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                            />
                                        </motion.div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A2F]/80 via-[#2D3A2F]/10 to-transparent 
                                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white/80 w-5 h-5 mb-3" />
                                            <p className="text-white text-xs line-clamp-3 text-center leading-relaxed font-light">
                                                {post.caption || 'View on Instagram'}
                                            </p>
                                        </div>

                                        {/* Corner decoration */}
                                        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/0 
                                            group-hover:border-white/60 transition-all duration-500 rounded-tr-lg" />
                                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/0 
                                            group-hover:border-white/60 transition-all duration-500 rounded-bl-lg" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default Gallery;
