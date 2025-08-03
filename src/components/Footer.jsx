import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="mt-20 bg-transparent text-stone-300 py-8 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm md:text-base leading-relaxed">
          © 2025 <span className="font-semibold text-white">Dipak Bachhav</span>.
          &nbsp;Built with{" ❤️ & "}
          <span className="text-blue-600">React</span>, deployed on{" "}
          <span className="text-orange-400">Vercel</span>
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6"
        >
          <a
            href="/"
            className="text-xs md:text-sm text-stone-400 hover:text-white 
                       transition-colors duration-300 hover:underline"
          >
            ↑ Back to top
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;