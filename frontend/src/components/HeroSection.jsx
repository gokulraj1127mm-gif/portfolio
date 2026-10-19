import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram, GraduationCap, ArrowDownRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mockData';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
              <span className="uppercase font-semibold">Available for Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-emerald-400 font-mono text-sm tracking-[0.25em] uppercase mb-3 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="w-6 h-[1px] bg-emerald-500/60 hidden sm:inline-block" />
              Hello, I'm
            </motion.p>

            {/* Primary Visual Focus: Large Editorial Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] mb-6"
            >
              <span>{profileData.name.trim().split(' ')[0]}</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
                {profileData.name.trim().split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Role & College */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-2 mb-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 tracking-tight">
                {profileData.role}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base flex items-center justify-center lg:justify-start gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{profileData.college}</span>
              </p>
            </motion.div>

            {/* Introduction / Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
            >
              {profileData.summary}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#05110a] font-bold text-sm px-7 h-12 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2.5"
                onClick={() => window.open(profileData.resumeUrl, '_blank')}
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white hover:border-emerald-500/50 px-7 h-12 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-sm"
                onClick={handleContactClick}
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2 hidden sm:inline-block">
                Follow:
              </span>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Profile Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px]">
              
              {/* Backlight Ambient Emerald Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/25 via-emerald-600/10 to-transparent blur-3xl transform -translate-y-4" />

              {/* Outer Refined Editorial Frame */}
              <div className="relative p-3 rounded-3xl bg-[#0e1210]/80 border border-white/[0.1] shadow-2xl backdrop-blur-xl">
                
                {/* Tech corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-emerald-400/60" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-emerald-400/60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-emerald-400/60" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-emerald-400/60" />

                {/* Image Container with Subtle Gradient Overlay */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#121614] border border-white/[0.06]">
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating "IT Student" Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 right-4 sm:-right-4 px-4 py-2.5 rounded-xl bg-[#090c0a]/95 border border-emerald-500/40 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-2.5"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 leading-none mb-0.5">
                      Status
                    </span>
                    <span className="block text-emerald-400 font-bold text-xs leading-none">
                      IT Student
                    </span>
                  </div>
                </motion.div>

                {/* Subtitle tag in frame */}
                <div className="mt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>// GOKUL RAJ</span>
                  <span className="text-emerald-400">2022 - 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
