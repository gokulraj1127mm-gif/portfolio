import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Code, Target, ArrowRight } from 'lucide-react';
import { aboutData } from '../data/mockData';

const AboutSection = () => {
  const features = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'A passionate IT student dedicated to learning and growing in the tech industry.'
    },
    {
      icon: Code,
      title: 'What I Do',
      description: 'I build web applications, test software, and explore emerging technologies.'
    },
    {
      icon: BookOpen,
      title: 'My Learning',
      description: 'Constantly updating my skills through courses, projects, and hands-on practice.'
    },
    {
      icon: Target,
      title: 'My Goals',
      description: 'To become a skilled software developer contributing to innovative solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 relative border-t border-white/[0.06]">
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
            <span>// 01</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Background &amp; Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-emerald-400">Me</span>
          </h2>
        </motion.div>

        {/* Editorial Layout: Text on Left, Minimalist Focus Cards on Right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Editorial Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={
                  index === 0
                    ? 'p-6 rounded-2xl bg-gradient-to-br from-emerald-500/[0.06] to-transparent border-l-2 border-emerald-400 border-y border-r border-white/[0.06]'
                    : ''
                }
              >
                <p
                  className={
                    index === 0
                      ? 'text-lg sm:text-xl text-slate-100 font-medium leading-relaxed'
                      : 'text-slate-300 text-base sm:text-lg leading-relaxed'
                  }
                >
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Refined Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl bg-[#0d100e]/80 border border-white/[0.07] hover:border-emerald-500/35 hover:bg-[#0f1411] transition-all duration-300 group shadow-lg shadow-black/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                    <feature.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base mb-1.5 flex items-center justify-between">
                      <span>{feature.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400/40 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
