import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type StaggeredFadeInProps = {
  children: ReactNode;
  delayOrder: number;
};

export const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = ({
  children,
  delayOrder
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.13 * delayOrder
      }}
    >
      {children}
    </motion.div>
  );
};
