import Subheading from "../components/Subheading";
import SubText from "../components/SubText";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpeg";
import { motion } from "framer-motion";
import {
  sectionProps,
  midVariants,
  cardVariants,
} from "../assets/js/utils/Animations";

const Blogs = () => {
  return (
    <motion.section
      id="blogs"
      className="blogs"
      {...sectionProps}
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <Subheading title="Blogs" isCenter variants={midVariants} />
        <SubText
          text="Insights and advice from our experts."
          variants={midVariants}
        />
        <div className="blogs__grid">
          <BlogCard
            src={Blog1}
            title="Top list of Mistakes to Avoid During MVP Development"
            text="When there appears an idea to create a startup you have to take into account all the risks you will face and evalute them thoughtfully. Also as a rule..."
            alt="Development Process"
            variants={cardVariants}
          />

          <BlogCard
            src={Blog2}
            title="A Day in the life on an Engineering Manager"
            text="During the eight years I spent as an engineering manager, I regularly tracked how I spent my time. As a startup engineering manager, I was ."
            alt="Engineering Management"
            variants={cardVariants}
          />

          <BlogCard
            src={Blog3}
            title="How to Build a Strong Remote Work Culture"
            text="Kishan Sheth is the compnay VP of Talent Operations responsible for matching some of the world's greatest freelancers with companies who..."
            alt="Phone Contacting"
            variants={cardVariants}
          />
        </div>
        <motion.div className="btn__container" variants={midVariants}>
          <Button text="View All" type="primary" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blogs;
