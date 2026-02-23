'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    ingredients?: string;
    popular?: boolean;
    image?: string;
    isNew?: boolean;
}

interface MenuItemCardProps {
    item: MenuItem;
    index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col items-center w-full max-w-[280px] mx-auto mt-16"
        >
            {/* Card Body */}
            <div className="bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 w-full flex flex-col items-center relative border border-[#AFC8B2]/10 overflow-visible pt-0 pb-10">

                {/* Fixed-height image area — consistent for all cards */}
                <div className="w-full flex justify-center items-center -mt-16 mb-4" style={{ minHeight: '180px' }}>
                    {item.image ? (
                        <div className="relative flex flex-col items-center">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={240}
                                height={180}
                                className="object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-lg"
                                style={{ maxHeight: '180px', width: 'auto' }}
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center" style={{ height: '180px' }}>
                            <span className="text-[#5F8F72] text-3xl font-display opacity-20">B</span>
                            <span className="text-[#5F8F72]/20 text-[7px] uppercase tracking-widest font-body mt-1">Coming Soon</span>
                        </div>
                    )}
                </div>

                {/* Text Content */}
                <div className="text-center px-6 flex flex-col items-center w-full">
                    {/* New badge */}
                    {item.isNew && (
                        <span className="bg-[#5F8F72] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
                            New
                        </span>
                    )}

                    <h3 className="text-xl font-bold text-[#1A231C] mb-2 font-display">
                        {item.name}
                    </h3>

                    <p className="text-[#5F6B61]/60 text-sm font-medium mb-6 font-body">
                        {item.id.includes('pizza') || item.id.includes('pasta') || item.id.includes('penne') || item.id.includes('mushroom') ? 'Gourmet' : 'Signature'} Selection
                    </p>

                    <span className="text-xl font-black text-[#1A231C] font-display">
                        {item.price.replace('৳', '৳')}
                    </span>
                </div>
            </div>

            {/* Subtle ground shadow beneath card */}
            <div className="w-3/4 h-2 bg-black/[0.04] blur-lg rounded-full mt-2 -z-10" />
        </motion.div>
    );
};

export default MenuItemCard;
