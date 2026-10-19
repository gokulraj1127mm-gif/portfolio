import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/mockData';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-36 relative border-t border-white/[0.06]">
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
            <span>// 05</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Academic Qualifications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-emerald-400">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Education Editorial Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0d100e]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-2xl shadow-black/40 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Duration */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-emerald-400 font-mono text-xs font-medium">
                    {edu.duration}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {edu.degree}
                </h3>
                <div className="flex items-start gap-2 text-slate-300 text-sm sm:text-base font-medium mb-4">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                <span>0{index + 1} // ACADEMIC RECORD</span>
                <span className="text-emerald-500/60">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
