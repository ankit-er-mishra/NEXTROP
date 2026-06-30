import "./FloatingWhatsapp.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whatsappLogo from "../../assets/images/circular_whatsapp.png";

function FloatingWhatsapp() {
  const [showButton, setShowButton] = useState(false);

  const whatsappNumber = "918709815050";

  const whatsappMessage =
    "Hello NEXTROP, I am visiting your website and would like to discuss advisory services for my business.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 120);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
          aria-label="Direct message NEXTROP on WhatsApp"
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 18,
            scale: 0.94,
          }}
          transition={{
            duration: 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="floating-whatsapp-label">Chat With Us</span>

          <span className="floating-whatsapp-icon">
            <img src={whatsappLogo} alt="WhatsApp" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default FloatingWhatsapp;