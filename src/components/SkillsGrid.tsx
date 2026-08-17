import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Code2, 
  Database, 
  Palette, 
  Users, 
  Cpu, 
  Layers, 
  CheckCircle2,
  Terminal,
  Shield,
  FileSpreadsheet,
  Globe
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsGrid: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return Server;
      case 'Code':
        return Code2;
      case 'Database':
        return Database;
      case 'Palette':
        return Palette;
      case 'Users':
        return Users;
      default:
        return Cpu;
    }
  };

  // Quick Highlights for a simple tool grid
  const keyTools = [
    { name: 'WordPress CMS', category: 'Web Development', icon: Globe },
    { name: 'Adobe Photoshop', category: 'Graphic Design', icon: Palette },
    { name: 'Adobe Illustrator', category: 'Vector Artwork', icon: Layers },
    { name: 'SQL & DBMS', category: 'Database Systems', icon: Database },
    { name: 'Java Programming', category: 'Software Logic', icon: Code2 },
    { name: 'C Language', category: 'Systems Coding', icon: Terminal },
    { name: 'BIOS / Firmware', category: 'Hardware Maintenance', icon: Cpu },
    { name: 'Server & LAN Setup', category: 'Network Infrastructure', icon: Server },
    { name: 'KoboCollect & Android', category: 'Mobile Field Data', icon: FileSpreadsheet },
    { name: 'Cybersecurity & Patches', category: 'System Security', icon: Shield },
    { name: 'Magazine Publishing', category: 'Editorial Print', icon: Palette },
    { name: 'Staff & Team Training', category: 'Capacity Building', icon: Users },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#0d0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300 uppercase tracking-wider">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Skills & Technical Abilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal">
            A comprehensive breakdown of IT infrastructure, database management, web technologies, and creative design tools.
          </p>
        </div>

        {/* 1. Simple Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#131622] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-md group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-red-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-normal line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Simple Skills Grid within Category */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#181c2b] border border-slate-750/70 text-xs hover:border-slate-650 transition-colors"
                      >
                        <span className="font-medium text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#131622] text-slate-300 border border-slate-700 shrink-0 ml-2">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Simple Tools & Software Grid */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold font-heading text-white">
              Core Software, Tools & Technologies
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-normal">
              Direct practical tooling applied across daily administrative and technical assignments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {keyTools.map((tool, tIdx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tIdx}
                  className="p-3.5 rounded-xl bg-[#131622] border border-slate-800 hover:border-slate-700 hover:bg-[#181c2b] transition-all flex flex-col items-center text-center justify-center space-y-1.5 shadow-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <ToolIcon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white leading-tight">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {tool.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
