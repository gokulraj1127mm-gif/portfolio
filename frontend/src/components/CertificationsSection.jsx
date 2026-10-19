import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/mockData';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.25em] mb-3">
            <span>// 06</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-emerald-400">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#0d100e]/80 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#0f1411] transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30"
            >
              <div>
                {/* Top Badge: Platform and Year */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-emerald-400 font-mono text-xs capitalize">
                    {cert.platform}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {cert.date}
                  </span>
                </div>

                {/* Award Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                  <Award className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                  {cert.name}
                </h3>
              </div>

              {/* Verified Footer */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-[11px] text-slate-400">Credential Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
