import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck } from "lucide-react";

const stats = [
  { value: "3×", desc: "Black women are nearly 3× more likely to die during pregnancy or postpartum" },
  { value: "1 in 4", desc: "Women experience perinatal mental health challenges" },
  { value: "Many", desc: "Mothers report feeling unheard within maternity care" },
];

const offerings = [
  { icon: Heart, title: "Curated Experiences", desc: "Wellness-led events and meetups designed with intention." },
  { icon: Users, title: "Community & Connection", desc: "A growing network of mothers who value real, supportive spaces." },
  { icon: ShieldCheck, title: "Safe, Inclusive Spaces", desc: "Culturally aware environments where every mother feels respected." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const EssenceSection = () => {
  return (
    <section id="about" className="section-padding bg-lavender-light">
      <div className="max-w-6xl mx-auto">
        {/* Essence */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">The Essence</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 text-foreground">
            Beyond the clinical.
          </h2>
          <p className="mt-6 font-body text-muted-foreground text-lg leading-relaxed">
            ClockedOutMum is a maternal wellbeing platform created for women navigating the realities of modern motherhood. We exist beyond the clinical — offering thoughtfully curated spaces where mothers can rest, connect and feel seen.
          </p>
        </motion.div>

        {/* Why it matters - stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/50"
            >
              <span className="font-display text-4xl font-bold text-primary">{stat.value}</span>
              <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What we offer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-foreground">
            Spaces designed for you.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
