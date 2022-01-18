import { motion } from "framer-motion";

const ServiceCard = ({ title, icon, variants = null }) => {
  return (
    <motion.div className="service-card" variants={variants}>
      <div className="service-card__logo">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
    </motion.div>
  );
};

export default ServiceCard;
