import Subheading from "../components/Subheading";
import SubText from "../components/SubText";
import TestimonialCard from "../components/TestimonialCard";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  sectionProps,
  midVariants,
  cardVariants,
} from "../assets/js/utils/Animations";
const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="testimonials"
      {...sectionProps}
    >
      <div className="container">
        <Subheading title="Testimonials" isCenter variants={midVariants} />
        <SubText
          text="See what our clients say about us."
          variants={midVariants}
        />
        <div className="testimonials__grid">
          <TestimonialCard
            icon={<FaQuoteLeft />}
            quote="The best on the net! Software development saved my business. I use Software development often. I am really satisfied with my Software Development."
            quotee="John Doe"
            position="Client 1"
            variants={cardVariants}
          />
          <TestimonialCard
            icon={<FaQuoteLeft />}
            quote="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            quotee="Mary Smith"
            position="Client 2"
            variants={cardVariants}
          />
          <TestimonialCard
            icon={<FaQuoteLeft />}
            quote="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            quotee="John Smith"
            position="Client 3"
            variants={cardVariants}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
