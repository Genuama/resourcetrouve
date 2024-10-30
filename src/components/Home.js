import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            className="content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="welcome-heading"
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Welcome to ResourceTrouve
            </motion.h1>
            <motion.p
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                Empowering low-income students with access to valuable tech resources and mentorship programs.
            </motion.p>
            <motion.a
                href="/resources"
                className="cta-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Explore Resources
            </motion.a>
        </motion.div>
    );
};

export default Home;
