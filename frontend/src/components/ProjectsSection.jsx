import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/mockData';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-36 relative border-t border-white/[0.06]">
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
            <span>// 03</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span>Featured Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Here are some of the projects I've worked on, showcasing my skills and learning journey
          </p>
        </motion.div>

        {/* Editorial Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0d100e]/90 border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-500 shadow-2xl shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Showcase with Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#151917] border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d100e] via-[#0d100e]/30 to-transparent" />

                  {/* Top Header Floating Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 font-mono text-xs text-emerald-400">
                      0{index + 1}
                    </span>

                    <Badge
                      variant="secondary"
                      className="bg-black/70 backdrop-blur-md text-emerald-400 border-emerald-500/30 text-xs font-mono tracking-wide"
                    >
                      {project.role}
                    </Badge>
                  </div>
                </div>

                {/* Project Body Content */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-emerald-400/50 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all" />
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:border-emerald-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Actions */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center gap-3">
                {project.live && project.live !== '#' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#05110a] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] text-slate-500 font-mono text-xs cursor-default">
                    Internal App
                  </span>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-emerald-500/40 text-slate-200 hover:text-white text-xs font-medium transition-all"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>Code</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
