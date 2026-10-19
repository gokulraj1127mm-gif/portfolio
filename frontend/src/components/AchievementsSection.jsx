import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';
import { achievementsData } from '../data/mockData';

const getIcon = (iconName) => {
  const icons = {
    Trophy,
    Medal,
    Star,
    Certificate: Award
  };
  return icons[iconName] || Trophy;
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-36 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-[0.25em] mb-3">
            <span>// 07</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Honors &amp; Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Recognition and accomplishments along my journey
          </p>
        </motion.div>

        {/* Achievements Showcase */}
        <div className="max-w-2xl mx-auto">
          {achievementsData.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#0d100e]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-2xl shadow-black/40 text-center relative overflow-hidden group"
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.06] to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 group-hover:scale-110 transition-all">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight">
                    {achievement.title}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-emerald-400">
                    <span>Department Recognition</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
