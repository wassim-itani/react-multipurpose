import Subheading from "../components/Subheading";
import ServiceCard from "../components/ServiceCard";
import { FaLightbulb,FaCalendar,FaHeadset,FaComment} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  sectionProps,
  leftVariants,
  cardVariants,
} from "../assets/js/utils/Animations";

const About = () => {
  return (
    <motion.section id="about" className="about" {...sectionProps}>
      <div className="container about__container">
        <motion.div variants={leftVariants}>
          <Subheading title="About CRYO" />
          <p className="about__text">
            We Believe that everyone deserves to have a website or online store.
            Innovation and simplicity make us happy. Our mission is to help
            people achieve what they have passionate about it.
          </p>
          <p className="about__text">
            We are excited to simplify SEO for everyone through software,
            education, or community.
          </p>
        </motion.div>
        <div className="about__right">
          <ServiceCard
            title="Innovative Ideas"
            icon={<FaLightbulb />}
            variants={cardVariants}
          />
          <ServiceCard
            title="Planning "
            icon={<FaCalendar />}
            variants={cardVariants}
          />
          <ServiceCard
            title="Communication"
            icon={<FaHeadset />}
            variants={cardVariants}
          />
          <ServiceCard
            title="24 * 7 Support"
            icon={<FaComment />}
            variants={cardVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
