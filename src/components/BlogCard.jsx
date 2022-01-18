import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = ({ src, alt, title, text, variants = null }) => {
  
  return (
    <motion.div className="blog-card" variants={variants}>
      <img src={src} alt={alt} className="blog-card__img" />
      <div className="blog-card__content">
        <div className="blog-card__body">
          <div className="blog-card__title">{title}</div>
          <p className="blog-card__text"> {text}</p>
        </div>
        <div className="blog-card__footer">
          <Button type="secondary" text="Read More" icon={<FaArrowRight />} />
        </div>
      </div>
    </motion.div>
  );
};
export default BlogCard;
