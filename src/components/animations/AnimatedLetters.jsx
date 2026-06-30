import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedLetters({
  text = "",
  className = "",
  delay = 0,
  stagger = 0.018,
  once = true,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    amount: 0.45,
    margin: "0px 0px -8% 0px",
  });

  const words = String(text).split(" ");

  return (
    <motion.span
      ref={ref}
      className={`animated-letters ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, wordIndex) => (
        <span className="animated-word-unit" key={`${word}-${wordIndex}`}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              className="animated-letter"
              key={`${letter}-${wordIndex}-${letterIndex}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 22,
                  x: letterIndex % 2 === 0 ? -4 : 4,
                  rotateX: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.62,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}

          {wordIndex !== words.length - 1 && (
            <span className="animated-space">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}

export default AnimatedLetters;