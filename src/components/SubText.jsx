import { motion } from "framer-motion";

const SubText = ({ text, variants }) => {
  return (
    <motion.p className="sub-text" variants={variants}>
      {text}
    </motion.p>
  );
};

export default SubText;
