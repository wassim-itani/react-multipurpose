import Subheading from "../components/Subheading";
import SubText from "../components/SubText";
import ServiceImg from "../assets/images/services.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  sectionProps,
  imgVariants,
  midVariants,
  rightVariants,
} from "../assets/js/utils/Animations";

const Services = () => {
  return (
    <motion.section id="services" className="services" {...sectionProps}>
      <div className="container">
        <Subheading title="Why CRYO ?" isCenter variants={midVariants} />
        <SubText
          text="Always stay updated with the technologies thus we help our clients by
          giving the best solutions for their needs."
          variants={midVariants}
        />
        <div className="services__grid">
          <motion.img
            src={ServiceImg}
            alt="Service"
            className="services__img"
            variants={imgVariants}
          />
          <motion.ul className="services__list" variants={rightVariants}>
            <li className="services__item">
              <div>
                <FaCheckCircle />
              </div>
              <p className="services__text">
                Over 10+ years of wide experience in the industry.
              </p>
            </li>
            <li className="services__item">
              <div>
                <FaCheckCircle />
              </div>
              <p className="services__text">
                Provide solutions to our multiple global clients.
              </p>
            </li>
            <li className="services__item">
              <div>
                <FaCheckCircle />
              </div>
              <p className="services__text">
                Strong team of 150+ creative people.
              </p>
            </li>
            <li className="services__item">
              <div>
                <FaCheckCircle />
              </div>
              <p className="services__text">
                99% adhere to service level contract.
              </p>
            </li>
            <li className="services__item">
              <div>
                <FaCheckCircle />
              </div>
              <p className="services__text">
                Ready to receive service request 24/7.
              </p>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
