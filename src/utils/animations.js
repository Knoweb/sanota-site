// Animation variants for Framer Motion

// Fade in from bottom
export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Fade in from left
export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Fade in from right
export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Scale in
export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Stagger container for lists/grids
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Stagger item
export const staggerItem = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Hover scale effect
export const hoverScale = {
    scale: 1.05,
    transition: {
        duration: 0.3,
        ease: "easeInOut"
    }
};

// Hover lift effect
export const hoverLift = {
    y: -10,
    transition: {
        duration: 0.3,
        ease: "easeOut"
    }
};

// Tap scale effect
export const tapScale = {
    scale: 0.95
};

// Viewport settings for scroll animations
export const viewportOnce = {
    once: true,
    amount: 0.3
};
