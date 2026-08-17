import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Code, 
  Database, 
  Palette, 
  Users, 
  Trophy, 
  Compass, 
  Globe, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  FileCheck2
} from 'lucide-react';
import { personalInfo, personalInterests } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResumeModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResumeModal }) => {
  const pillars = [
    {
      icon: Server,
      title: 'Infrastructure & Systems Administration',
      desc: 'Expertise in computer hardware maintenance, server management, BIOS flashing, OS deployment images, network switches, and security updates with high uptime.'
    },
    {
      icon: Database,
      title: 'Database & Records Integrity',
      desc: 'Hands-on database administration, schema maintenance, SQL querying, backup routines, and managing sensitive records in medical & educational settings.'
    },
    {
      icon: Code,
      title: 'Web & Software Engineering',
      desc: 'Web development using WordPress & modern codebases, Java and C logic programming, and Android data collection form deployments via KoboCollect.'
    },
    {
      icon: Palette,
      title: 'Graphics & Publication Publishing',
      desc: 'Multi-year experience in Adobe Photoshop & Illustrator, directing society annual magazine publishing, vector branding, commercial photography, and video editing.'
    },
    {
      icon: Users,
      title: 'Technical Training & Leadership',
      desc: 'Trained over 20 medical staff on healthcare informatics, led secondary ICT curriculum instruction, and facilitated youth entrepreneurship and advocacy.'
    }
  ];

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'Compass':
        return Compass;
      case 'Globe':
        return Globe;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0d0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold text-red-300 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Bridging Technical Excellence & Creative Problem Solving
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal">
            A versatile IT Professional equipped with analytical rigor, comprehensive technical competence, and a passion for empowering organizations through digital systems.
          </p>
        </div>

        {/* Top Split: Detailed Bio & Core Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Detailed Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed"
          >
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-red-400" />
              Professional Background & Mission
            </h3>
            
            <p>
              I am a dedicated IT Specialist with a <strong className="text-white font-semibold">Bachelor of Science in Information Technology (BSc. IT, 4.5 GPA)</strong> from Kumi University and a <strong className="text-white font-semibold">Diploma in IT (3.6 GPA)</strong> from Ndejje University. Over the past 3+ years, I have worked at the intersection of technical infrastructure, system administration, website management, and multimedia publishing.
            </p>

            <p>
              My professional journey spans demanding environments — from managing computer laboratories and securing network hardware for national examination centers at Mukura Memorial Secondary School, to optimizing patient database workflows at Bethesda Hospital, and designing corporate web systems at LAO Tech Systems.
            </p>

            <p>
              I pride myself on a dual ability: delivering reliable hardware and backend systems while maintaining an eye for aesthetic typography, graphic design, and user-centric web interfaces. I am passionate about mentoring staff, solving high-stakes IT bottlenecks, and continuous learning.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Proactive preventive hardware & software servicing',
                'Comprehensive staff training & cyber hygiene',
                'High-performance database & data pipelines',
                'Print & digital creative publication direction',
                'Calm, structured troubleshooting under pressure',
                'Agile team collaboration and ethical leadership'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm font-medium text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#181c2b] hover:bg-[#22283d] text-white border border-slate-700 hover:border-slate-600 transition-colors shadow-md active:scale-98"
              >
                <FileCheck2 className="w-4 h-4 text-red-400" />
                <span>Review Official Resume Credentials</span>
              </button>
            </div>
          </motion.div>

          {/* Core Technical Pillars Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Core Capabilities
            </h3>
            
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#131622] border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-3.5 group shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading font-bold text-sm text-white group-hover:text-red-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* "Beyond Work" / Personal Interests & Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-10 border-t border-slate-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-heading text-white">
              Beyond the Screen: Character & Interests
            </h3>
            <p className="text-sm text-slate-400 mt-1 font-normal">
              Active lifestyle, teamwork discipline, and curiosity driving continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInterests.map((interest, idx) => {
              const Icon = getInterestIcon(interest.iconName);
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#131622] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-md group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#181c2b] text-slate-200 border border-slate-750">
                        {interest.badge}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-white">
                      {interest.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {interest.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
