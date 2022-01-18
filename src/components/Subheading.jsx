import { motion } from "framer-motion";
const Subheading = ({ title, isCenter = false, variants = null }) => {
  const className = `subheading ${isCenter ? "subheading--center" : ""}`;
  return (
    <motion.h2 className={className} variants={variants}>
      {title}
    </motion.h2>
  );
};

export default Subheading;
