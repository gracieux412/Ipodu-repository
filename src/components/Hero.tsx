import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Sparkles,
  Server,
  Code,
  Database
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { portraitImg } from '../assets/images';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Ambience & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 w-fit text-xs font-semibold text-red-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Available for Full-Time IT, Systems & Tech Roles</span>
            </div>

            {/* Main Name & Dynamic Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hello, I&apos;m <br />
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Subtitle Rotator */}
              <div className="h-10 sm:h-12 flex items-center">
                <motion.span
                  key={currentSubtitleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-2xl font-bold text-slate-200 flex items-center gap-2.5"
                >
                  <Sparkles className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{personalInfo.subtitles[currentSubtitleIndex]}</span>
                </motion.span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Professional IT Specialist with 3+ years of verifiable experience across <strong className="font-semibold text-white">infrastructure maintenance</strong>, <strong className="font-semibold text-white">website & database administration</strong>, <strong className="font-semibold text-white">enterprise IT operations</strong>, and <strong className="font-semibold text-white">creative graphics publishing</strong>.
            </p>

            {/* Contact Badges Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141724] border border-slate-750 hover:bg-[#1d2235] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141724] border border-slate-750 hover:bg-[#1d2235] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.internationalPhone}</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141724] border border-slate-750 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                id="hero-explore-work-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 active:scale-98 transition-all"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="hero-download-cv-btn"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-100 bg-[#161a28] border border-slate-700 hover:bg-[#20263a] hover:border-slate-600 shadow-md active:scale-98 transition-all"
              >
                <Download className="w-4 h-4 text-red-400" />
                <span>Download CV</span>
              </button>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-800/80 hover:bg-emerald-900/60 hover:text-white transition-colors shadow-sm"
                title="Chat with Ipodu on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp Chat</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: High-Definition Portrait Card & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 opacity-30 blur-xl" />
              
              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#131622] shadow-2xl border-2 border-slate-750">
                <img
                  src={portraitImg}
                  alt="Ipodu Scovia - IT Officer"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white leading-snug">
                        Ipodu Scovia
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        BSc. IT (GPA: 4.5) • Systems Specialist
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/40">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Credential Badge 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[#161a28] rounded-2xl p-3 shadow-2xl border border-slate-700 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    GPA 4.5 / 5.0
                  </div>
                  <div className="text-[10px] text-slate-400">
                    BSc. IT (Kumi Univ)
                  </div>
                </div>
              </motion.div>

              {/* Floating Credential Badge 2 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#161a28] rounded-2xl p-3 shadow-2xl border border-slate-700 flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    3+ Years Experience
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Systems, IT & Web Ops
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#131622] border border-slate-800 shadow-md hover:border-slate-700 transition-all flex flex-col items-center text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white group-hover:text-red-400 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1.5">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
