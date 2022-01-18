import { motion } from "framer-motion";
const TestimonialCard = ({
  icon,
  quote,
  quotee,
  position,
  variants = null,
}) => {
  return (
    <motion.div className="testimonial-card" variants={variants}>
      {icon}
      <p className="testimonial-card__quote">{quote}</p>
      <div className="testimonial-card__info">
        <div className="testimonial-card__quotee">{quotee}</div>
        <div className="testimonial-card__position">{position}</div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
