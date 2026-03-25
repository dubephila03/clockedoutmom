import { motion } from "framer-motion";
import eventGroup from "@/assets/event-group.jpg";
import eventFounder from "@/assets/event-founder.jpg";
import eventTable from "@/assets/event-table.jpg";
import eventGroup2 from "@/assets/event-group2.jpg";

const images = [
  { src: eventFounder, alt: "ClockedOutMum founder Vanessa" },
  { src: eventGroup, alt: "ClockedOutMum community event" },
  { src: eventTable, alt: "Curated event gifts" },
  { src: eventGroup2, alt: "Community gathering" },
];

const expectations = [
  { title: "Wellness Sessions", desc: "Gentle, restorative experiences that prioritise your wellbeing." },
  { title: "Soft Play & Socials", desc: "Relaxed, welcoming spaces for mums and little ones to connect." },
  { title: "Curated Events", desc: "From spa-style experiences to seasonal gatherings — each one thoughtfully designed." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">Our Experiences</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 text-foreground">
            Pause. Breathe. Reconnect.
          </h2>
          <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed">
            Every ClockedOutMum experience is intentionally designed to help you pause, breathe and reconnect.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* What to expect */}
        <div className="grid md:grid-cols-3 gap-8">
          {expectations.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="relative pl-6 border-l-2 border-primary/30"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why different */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mt-16 bg-sage-light rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            This is not just another mum meet-up.
          </h3>
          <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
            {["Quality over quantity", "Safe, judgement-free environments", "Experiences that feel considered and calm"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
