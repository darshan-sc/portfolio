import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "Robust Adaptive Multi-Step Predictive Shielding",
      venue: "ICLR 2026",
      role: "Co-author",
      description: "Contributed to developing a multi-step safety shield for RL agents, reducing safety violations by up to 90% and scaling to complex, high-dimensional environments.",
    },
  ];

  return (
    <section id="publications" className="py-24 sm:py-32 bg-bg border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-heading text-5xl sm:text-6xl text-text font-bold mb-16 tracking-tighter"
        >
          Publications
        </motion.h2>

        <div className="flex flex-col">
          {publications.map((pub, index) => (
            <motion.div 
              key={pub.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 border-t border-black/10 first:border-0 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8"
            >
              <div className="lg:w-1/3">
                <h3 className="font-heading text-2xl sm:text-3xl text-text font-bold tracking-tight leading-tight mb-4">{pub.title}</h3>
                <span className="inline-block border border-accent text-accent px-3 py-1 font-mono text-xs uppercase tracking-widest font-bold">{pub.venue}</span>
              </div>
              <div className="lg:w-7/12">
                <p className="font-body text-muted text-sm uppercase tracking-widest font-semibold mb-4">{pub.role}</p>
                <p className="font-body text-lg text-text/90 leading-relaxed">{pub.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
