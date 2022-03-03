import React from 'react';
import { motion, AnimatePresence, useCycle } from "framer-motion";

const navLink = [ // linklar uchun array ichida object
    { name: "Home", to: "#", id: 1},
    { name: "About", to: "#", id: 2},
    { name: "Blog", to: "#", id: 3},
    { name: "Contact", to: "#", id: 4}
]

const navbarSituation = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
}

const animProperties = {
    closed: {
        transition: {
            staggerChildren: 0.2, // animatsiya davomiylig
            staggerDirection: -1 // animatsiya joylashuvi
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

const Navbar = () => {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <main>
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0}}
                        animate={{
                            width: 230
                        }}
                        exit={{
                            width: 0,
                            transition: {delay: 0.7, duration: 0.3}
                        }}
                    >
                        <motion.div
                            className='container'
                            initial="closed"
                            variants={animProperties}
                            animate="open"
                            exit="closed"
                        >
                            {navLink.map(({ name, to, id }) => (
                                <motion.a
                                    key={id}
                                    href={to}
                                    whileHover={{ scale: 1.1 }}
                                    variants={navbarSituation}
                                >
                                    {name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
            <button className='toggleButton' onClick={cycleOpen}>
                {open ? "Yopish" : "Ochish"}
            </button>
        </main>
    );
};

export default Navbar;