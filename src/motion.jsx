import React from "react";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ as = "div", children, ...props }) {
  const reduce = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;
  return (
    <Component
      {...props}
      initial={{ opacity: 0, y: reduce ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduce ? 0 : 0.35 }}
      whileHover={as === "article" && !reduce ? { y: -3 } : undefined}
    >
      {children}
    </Component>
  );
}
