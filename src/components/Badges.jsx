import { motion } from "framer-motion"
import { awsBadges } from "../constants";

const Badges = () => {
  return (
      <div className="container mx-auto px-4 pb-10 text-center">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
        className="my-20 text-center text-4xl">AWS Badges
        </motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1}}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {awsBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center justify-center transition-transform hover:scale-110"
            >
            <img
                src={badge.badgeUrl}
                alt={`AWS Badge ${badge.id}`}
                className="object-contain"
                width={190}
                height={190}
            />
            </div>
          ))}
        </motion.div>
      </div>
  );
};

export default Badges;