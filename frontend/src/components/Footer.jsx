import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp, Download, ArrowUpRight } from 'lucide-react';
import { profileData, navLinks } from '../data/mockData';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profileData.social.instagram, label: 'Instagram' }
  ];

  return (
    <footer className="relative pt-20 pb-12 border-t border-white/[0.08] overflow-hidden bg-[#070809]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Brand Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white mb-6 group select-none"
            whileHover={{ scale: 1.03 }}
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-all">
              G
            </span>
            <span>
              Gokul<span className="text-emerald-400">.</span>
            </span>
          </motion.a>

          {/* Quick Section Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Download Action */}
          <div className="mb-8">
            <Button
              variant="outline"
              size="sm"
              className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border-emerald-500/30 hover:border-emerald-500/60 rounded-xl px-5 h-10 text-xs font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              onClick={() => window.open(profileData.resumeUrl, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Copyright Line */}
          <div className="text-slate-400 text-xs sm:text-sm flex items-center justify-center gap-1 font-mono">
            <span>© {currentYear} {profileData.name.trim()}. Made with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 inline mx-0.5" />
            <span>All rights reserved.</span>
          </div>

        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-[#0d120f]/90 border border-emerald-500/40 text-emerald-400 shadow-2xl shadow-black/80 hover:bg-emerald-500 hover:text-[#05110a] backdrop-blur-md transition-all duration-300 z-40 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
