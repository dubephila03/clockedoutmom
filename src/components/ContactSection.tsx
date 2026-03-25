import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-foreground">
            We'd love to hear from you.
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            For partnerships, collaborations or general enquiries.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid sm:grid-cols-3 gap-6"
        >
          <a
            href="mailto:hello@clockedoutmum.com"
            className="flex flex-col items-center gap-3 bg-card rounded-2xl p-8 border border-border/50 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="font-body text-sm text-foreground font-medium">Email Us</span>
          </a>
          <a
            href="tel:+447341812223"
            className="flex flex-col items-center gap-3 bg-card rounded-2xl p-8 border border-border/50 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="font-body text-sm text-foreground font-medium">Call Us</span>
          </a>
          <a
            href="https://instagram.com/clockedoutmum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-card rounded-2xl p-8 border border-border/50 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <span className="font-body text-sm text-foreground font-medium">@clockedoutmum</span>
          </a>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 text-center font-body text-sm text-muted-foreground"
        >
          We aim to respond within 48 hours.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
