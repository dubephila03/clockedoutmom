import { motion } from "framer-motion";
import { Sparkles, CalendarHeart, MessageCircleHeart, HandHeart } from "lucide-react";

const benefits = [
  { icon: CalendarHeart, text: "Access to curated events" },
  { icon: MessageCircleHeart, text: "A supportive community of like-minded mums" },
  { icon: Sparkles, text: "Updates on experiences and opportunities" },
  { icon: HandHeart, text: "A space where you don't have to have it all together" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-lavender-light relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sage rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blush rounded-full opacity-15 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">Community</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 text-foreground">
            You don't have to do <br className="hidden md:block" />
            motherhood <span className="italic text-gradient">alone.</span>
          </h2>
          <p className="mt-6 font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're pregnant, newly postpartum or navigating motherhood — you are welcome here.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border/50 text-left"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lavender/30 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-body text-sm text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Join ClockedOutMum
          </a>
          <p className="mt-4 font-body text-sm text-muted-foreground italic">
            Because mums deserve rest too. 🌿
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
