import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';
import { profileData } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission preserving existing timeout behavior
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 4000);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: profileData.email,
      href: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: profileData.phone,
      href: `tel:${profileData.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profileData.location,
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: profileData.social.instagram, label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-24 md:py-36 relative border-t border-white/[0.06]">
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
            <span>// 08</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </motion.div>

        {/* Two-Column Grid: Contact Information & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Have a question or want to discuss a project? Reach out directly through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="p-5 rounded-2xl bg-[#0d100e]/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium text-sm sm:text-base hover:text-emerald-400 transition-colors block truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm sm:text-base block truncate">
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Channels */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Connect With Me:
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3.5 rounded-xl bg-[#0d100e]/80 border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0d100e]/90 border border-white/[0.08] shadow-2xl shadow-black/50 space-y-6 relative overflow-hidden"
            >
              {/* Top Form Header */}
              <div className="border-b border-white/[0.08] pb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Fill out the form below and I'll get back to you promptly.
                </p>
              </div>

              {/* Status Alert */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </motion.div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-white/[0.03] border-white/[0.1] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-500 h-12 rounded-xl text-sm transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="bg-white/[0.03] border-white/[0.1] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-500 h-12 rounded-xl text-sm transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="bg-white/[0.03] border-white/[0.1] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-500 rounded-xl text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#05110a] font-bold text-sm h-12 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
