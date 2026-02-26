import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  category: string;
  key?: any;
}

export function ProjectCard({ title, description, tech, link, github, category }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-line p-6 bg-white/30 hover:bg-ink hover:text-bg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-serif italic text-xs opacity-60 uppercase tracking-widest">{category}</span>
        <div className="flex gap-3">
          {github && <a href={github} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><Github size={18} /></a>}
          {link && <a href={link} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity"><ExternalLink size={18} /></a>}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-sm opacity-80 mb-6 leading-relaxed font-medium">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="font-mono text-[10px] px-2 py-1 border border-current/20 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
