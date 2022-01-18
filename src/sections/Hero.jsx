import Button from "../components/Button";
import HeroImg from "../assets/images/hero.svg";
import { FaRegAddressCard, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  sectionProps,
  imgVariants,
  leftVariants,
} from "../assets/js/utils/Animations";

const Hero = () => {
  return (
    <motion.section className="hero" {...sectionProps}>
      <div className="container hero__container">
        <motion.div className="hero__left" variants={leftVariants}>
          <h1>We Provide Solutions to Help You Build or Grow Your Business!</h1>
          <p className="hero__text">
            A professional web and mobile app development agency with over 100+
            web and app developed. We provide a high- quality service in web and
            mobile app development as well as in design.
          </p>
          <div className="hero__btn-container">
            <Button
              path="#about"
              type="primary"
              text="About Us"
              icon={<FaRegAddressCard />}
            />
            <Button
              path="#contact"
              type="secondary"
              text="Get in touch"
              icon={<FaPhone />}
            />
          </div>
        </motion.div>
        <motion.img
          src={HeroImg}
          alt="Work Coordination"
          className="hero__img"
          variants={imgVariants}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
