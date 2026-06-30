import "./Contact.css";

import ContactHero from "../../sections/contact/ContactHero/ContactHero";
import ContactAccess from "../../sections/contact/ContactAccess/ContactAccess";
import ContactForm from "../../sections/contact/ContactForm/ContactForm";
import ContactProtocol from "../../sections/contact/ContactProtocol/ContactProtocol";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

function Contact() {
  return (
    <main className="contact-page">
      <Navbar />
      <ContactHero />
      <ContactAccess />
      <ContactForm />
      <ContactProtocol />
      <Footer />
    </main>
  );
}

export default Contact;