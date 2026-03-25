import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img src={logo} alt="ClockedOutMum" className="h-32 md:h-44 w-auto mx-auto animate-float" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight"
        >
          Because mums deserve{" "}
          <span className="text-gradient italic">rest too.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          A refined space for mothers to pause, reconnect and feel supported through pregnancy, postpartum and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#community"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Join the Community
          </a>
          <a
            href="#experiences"
            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Explore Experiences
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
