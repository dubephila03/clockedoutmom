import { motion } from "framer-motion";
import founderImg from "@/assets/event-founder.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={founderImg} alt="Vanessa, founder of ClockedOutMum" loading="lazy" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-lavender rounded-full opacity-60 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-sage rounded-full opacity-40 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">About</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-foreground">
              Founded from lived experience.
            </h2>
            <p className="mt-6 font-body text-muted-foreground leading-relaxed">
              Founded by Vanessa, a Project Manager with over five years' experience in the health sector, the platform was created at the intersection of professional insight and lived experience.
            </p>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">
              Through her work, she witnessed the gaps in maternal care — particularly for women from diverse and underserved communities. Through motherhood, she felt them.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <h4 className="font-display text-sm font-semibold text-foreground">Our Mission</h4>
                <p className="mt-2 font-body text-xs text-muted-foreground leading-relaxed">
                  To create elevated, inclusive and restorative spaces where mothers feel seen, supported and prioritised.
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border/50">
                <h4 className="font-display text-sm font-semibold text-foreground">Our Vision</h4>
                <p className="mt-2 font-body text-xs text-muted-foreground leading-relaxed">
                  A world where every mother has access to support that feels safe, relevant and empowering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
