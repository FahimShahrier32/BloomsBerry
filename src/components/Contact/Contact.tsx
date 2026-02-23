'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faClock,
    faPhone,
    faEnvelope,
    faPaperPlane,
    faUser,
    faMessage
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

const contactDetails = [
    {
        icon: faLocationDot,
        label: 'Address',
        value: 'Concord Sohel Square, Plot No. 75, 13th Floor, Satmasjid Road, Dhanmondi 27, Dhaka',
        href: 'https://maps.google.com/?q=Concord+Sohel+Square+Dhanmondi',
        isExternal: true,
    },
    {
        icon: faClock,
        label: 'Hours',
        value: 'Daily — 11:00 AM to 11:00 PM',
        href: null,
        isExternal: false,
    },
    {
        icon: faPhone,
        label: 'Phone',
        value: '+8801934-472047',
        href: 'tel:+8801934-472047',
        isExternal: false,
    },
    {
        icon: faEnvelope,
        label: 'Email',
        value: 'bloomsberrybd@gmail.com',
        href: 'mailto:bloomsberrybd@gmail.com',
        isExternal: false,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const openWhatsApp = () => {
        const phoneNumber = '8801934472047';
        const message = 'Hello Bloomsberry! I would like to make a reservation.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="bg-white py-24 md:py-32">
            <motion.div
                className="max-w-[1400px] mx-auto px-4 md:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                        <span className="text-[#5F8F72] font-semibold tracking-widest uppercase text-sm">
                            Get In Touch
                        </span>
                        <div className="w-12 h-0.5 bg-[#5F8F72]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-[#2D3A2F] mb-4">
                        Visit Us
                    </h2>
                    <p className="text-[#5F6B61] text-lg max-w-xl mx-auto">
                        Come for the coffee, stay for the conversation. We&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Info & Map */}
                    <motion.div variants={itemVariants} className="space-y-10">
                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactDetails.map((detail, index) => (
                                <motion.div
                                    key={detail.label}
                                    variants={itemVariants}
                                    className="group"
                                >
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            target={detail.isExternal ? '_blank' : undefined}
                                            rel={detail.isExternal ? 'noopener noreferrer' : undefined}
                                            className="block p-5 bg-[#F8FAF8] rounded-2xl border border-[#AFC8B2]/20 hover:border-[#5F8F72]/30 hover:shadow-lg hover:shadow-[#AFC8B2]/10 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#AFC8B2]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#AFC8B2]/30 transition-colors">
                                                    <FontAwesomeIcon icon={detail.icon} className="w-5 h-5 text-[#5F8F72]" />
                                                </div>
                                                <div>
                                                    <p className="text-[#5F8F72] font-semibold text-xs uppercase tracking-wider mb-1">
                                                        {detail.label}
                                                    </p>
                                                    <p className="text-[#2D3A2F] font-medium text-sm leading-relaxed">
                                                        {detail.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="p-5 bg-[#F8FAF8] rounded-2xl border border-[#AFC8B2]/20">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#AFC8B2]/20 flex items-center justify-center flex-shrink-0">
                                                    <FontAwesomeIcon icon={detail.icon} className="w-5 h-5 text-[#5F8F72]" />
                                                </div>
                                                <div>
                                                    <p className="text-[#5F8F72] font-semibold text-xs uppercase tracking-wider mb-1">
                                                        {detail.label}
                                                    </p>
                                                    <p className="text-[#2D3A2F] font-medium text-sm leading-relaxed">
                                                        {detail.value}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Google Map */}
                        <motion.div variants={itemVariants}>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#2D3A2F]/10">
                                {/* Map Loading Skeleton */}
                                {!mapLoaded && (
                                    <div className="absolute inset-0 bg-[#F8FAF8] flex items-center justify-center z-10">
                                        <div className="text-center">
                                            <div className="w-12 h-12 rounded-full bg-[#AFC8B2]/20 flex items-center justify-center mx-auto mb-3 animate-pulse">
                                                <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-[#5F8F72]" />
                                            </div>
                                            <p className="text-[#5F6B61] text-sm">Loading map...</p>
                                        </div>
                                    </div>
                                )}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9806461937517!2d90.3708871!3d23.7505962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b6066f272b%3A0xe5a3cbe54f676239!2sConcord%20Sohel%20Square!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    onLoad={() => setMapLoaded(true)}
                                    className="rounded-3xl"
                                />
                            </div>

                            {/* Quick Directions Button */}
                            <motion.a
                                href="https://maps.google.com/?q=Concord+Sohel+Square+Dhanmondi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center gap-2 bg-[#F8FAF8] hover:bg-[#AFC8B2]/20 text-[#2D3A2F] font-medium py-4 rounded-2xl border border-[#AFC8B2]/20 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-[#5F8F72]" />
                                Get Directions
                                <span className="text-[#5F8F72] group-hover:translate-x-1 transition-transform">→</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Form & WhatsApp */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Contact Form */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-[#F8FAF8] rounded-3xl p-8 border border-[#AFC8B2]/20"
                        >
                            <h3 className="text-2xl font-display text-[#2D3A2F] mb-2">Send us a Message</h3>
                            <p className="text-[#5F6B61] text-sm mb-6">
                                Have a question or want to make a reservation? Fill out the form below.
                            </p>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-[#5F8F72]/10 border border-[#5F8F72]/20 rounded-xl p-6 text-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#5F8F72] flex items-center justify-center mx-auto mb-4">
                                        <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-[#2D3A2F] font-semibold text-lg mb-2">Message Sent!</h4>
                                    <p className="text-[#5F6B61] text-sm">
                                        Thank you for reaching out. We&apos;ll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#2D3A2F] flex items-center gap-2">
                                                <FontAwesomeIcon icon={faUser} className="w-3 h-3 text-[#5F8F72]" />
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                                className="bg-white border-[#AFC8B2]/30 focus:border-[#5F8F72] focus:ring-[#5F8F72]/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#2D3A2F] flex items-center gap-2">
                                                <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-[#5F8F72]" />
                                                Phone
                                            </label>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+8801XXXXXXXXX"
                                                className="bg-white border-[#AFC8B2]/30 focus:border-[#5F8F72] focus:ring-[#5F8F72]/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#2D3A2F] flex items-center gap-2">
                                            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 text-[#5F8F72]" />
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                            className="bg-white border-[#AFC8B2]/30 focus:border-[#5F8F72] focus:ring-[#5F8F72]/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#2D3A2F] flex items-center gap-2">
                                            <FontAwesomeIcon icon={faMessage} className="w-3 h-3 text-[#5F8F72]" />
                                            Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your inquiry..."
                                            required
                                            rows={4}
                                            className="bg-white border-[#AFC8B2]/30 focus:border-[#5F8F72] focus:ring-[#5F8F72]/20 resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#5F8F72] hover:bg-[#7FA88A] text-white font-semibold py-6 rounded-full transition-all duration-300 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* WhatsApp CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Chat on WhatsApp</h4>
                                    <p className="text-white/80 text-sm">Quick response for reservations</p>
                                </div>
                            </div>
                            <Button
                                onClick={openWhatsApp}
                                variant="outline"
                                className="border-white bg-white text-[#128C7E] hover:bg-white/90 hover:text-[#128C7E] rounded-full px-6 font-semibold"
                            >
                                Message Us
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
