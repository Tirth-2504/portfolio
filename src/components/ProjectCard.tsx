import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";

export interface ProjectProcess {
  problem: string;
  technologies: string;
  features: string[];
  challenges: string;
  solutions: string;
  lessons: string;
}

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  githubLink?: string;
  demoLink?: string;
  category: string;
  process?: ProjectProcess;
  key?: any;
}

export function ProjectCard({ title, description, tech, link, github, githubLink, demoLink, category, process }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative border border-line p-6 bg-white/30 hover:bg-ink hover:text-bg transition-all duration-300 flex flex-col h-full"
      >
        <div className="flex justify-between items-start mb-4">
          <span className="font-serif italic text-xs opacity-60 uppercase tracking-widest">{category}</span>
          <div className="flex gap-3">
            {(github || githubLink) && <a href={github || githubLink} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" title="Source Code"><Github size={18} /></a>}
            {link && <a href={link} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" title="Live Project"><ExternalLink size={18} /></a>}
            {demoLink && <a href={demoLink} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" title="Live Demo"><ExternalLink size={18} /></a>}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-sm opacity-80 mb-6 leading-relaxed font-medium flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 border border-current/20 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {process && (
          <button 
            onClick={() => setIsOpen(true)}
            className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
          >
            View Case Study <ArrowRight size={14} />
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && process && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-bg border border-ink shadow-2xl p-8 sm:p-12"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-ink hover:text-bg transition-colors"
              >
                <X size={24} />
              </button>

              <div className="font-serif italic text-sm opacity-50 mb-4 uppercase tracking-[0.2em]">{category}</div>
              <h2 className="text-4xl font-bold tracking-tight mb-8">{title} — Case Study</h2>

              <div className="space-y-8">
                <section>
                  <h4 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">01. Problem Statement</h4>
                  <p className="text-lg leading-relaxed">{process.problem}</p>
                </section>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">02. Technologies</h4>
                    <p className="font-medium">{process.technologies}</p>
                  </section>
                  <section>
                    <h4 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">03. Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 font-medium">
                      {process.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </section>
                </div>

                <section className="bg-ink text-bg p-6 sm:p-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-4">04. Challenges & Solutions</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="font-bold mb-1">Challenge:</div>
                      <p className="opacity-80 leading-relaxed">{process.challenges}</p>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Solution:</div>
                      <p className="opacity-80 leading-relaxed">{process.solutions}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">05. Lessons Learned</h4>
                  <p className="text-lg leading-relaxed italic font-serif">{process.lessons}</p>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
