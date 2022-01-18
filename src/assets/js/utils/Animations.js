//section parent variant
const sectionVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

//section animation props

export const sectionProps = {
  initial: "hidden",
  variants: sectionVariants,
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.2,
  },
};

// children variants

export const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    duration: 0.15,
    ease: "easeOut",
  },
};

export const leftVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const midVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const rightVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.25,
      ease: "linear",
    },
  },
};
