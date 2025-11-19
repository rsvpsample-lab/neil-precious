import { motion } from 'framer-motion';

const MemorableMomentsSection = () => {
  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      
    </motion.section>
  );
};

export default MemorableMomentsSection;
