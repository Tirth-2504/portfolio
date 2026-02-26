import { motion } from "motion/react";

interface SkillBadgeProps {
  name: string;
  level?: string;
  key?: any;
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 p-3 border border-line bg-white/50 hover:border-ink transition-colors"
    >
      <div className="w-2 h-2 bg-ink rounded-full" />
      <div>
        <div className="text-sm font-bold tracking-tight">{name}</div>
        {level && <div className="text-[10px] font-mono opacity-50 uppercase">{level}</div>}
      </div>
    </motion.div>
  );
}
