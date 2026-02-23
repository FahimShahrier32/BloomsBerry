'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './FloatingActions.module.css';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPermanentlyHidden, setIsPermanentlyHidden] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = useCallback(() => {
        if (isPermanentlyHidden) return;
        setIsVisible(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // 5 seconds of inactivity
    }, [isPermanentlyHidden]);

    const handleManualClose = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsVisible(false);
        setIsPermanentlyHidden(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        // Events that indicate activity
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

        const handleActivity = () => resetTimer();

        events.forEach(event => {
            window.addEventListener(event, handleActivity);
        });

        // Initialize timer
        resetTimer();

        return () => {
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [resetTimer]);

    const actions = [
        {
            icon: faWhatsapp,
            href: "https://wa.me/8801934472047",
            label: "WhatsApp",
            color: "#25D366",
            shadow: "rgba(37, 211, 102, 0.3)"
        },
        {
            icon: faFacebookMessenger,
            href: "https://m.me/bloomsberrybd",
            label: "Messenger",
            color: "#0084FF",
            shadow: "rgba(0, 132, 255, 0.3)"
        },
        {
            icon: faPhone,
            href: "tel:+8801934472047",
            label: "Call Us",
            color: "#5F8F72",
            shadow: "rgba(95, 143, 114, 0.3)"
        }
    ];

    if (isPermanentlyHidden) return null;

    return (
        <div className={styles.container}>
            <AnimatePresence mode="wait">
                {isVisible ? (
                    <motion.div
                        key="actions"
                        className={styles.buttonStack}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {actions.map((action, index) => (
                            <motion.a
                                key={action.label}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                                style={{
                                    backgroundColor: action.color,
                                    boxShadow: `0 10px 25px ${action.shadow}`
                                }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={action.label}
                            >
                                <FontAwesomeIcon icon={action.icon} className={styles.icon} />
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={handleManualClose}
                            className={styles.closeButton}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Close menu"
                        >
                            <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.button
                        key="dots"
                        onClick={() => setIsVisible(true)}
                        className={styles.dotsButton}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        aria-label="Show actions"
                    >
                        <FontAwesomeIcon icon={faEllipsisVertical} className={styles.dotsIcon} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;
