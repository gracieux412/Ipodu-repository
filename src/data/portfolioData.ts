import { ExperienceItem, EducationItem, SkillCategory, ProjectItem, ReferenceItem, PersonalInterest } from '../types';
import { magazineImg } from '../assets/images';

export const personalInfo = {
  name: 'Ipodu Scovia',
  title: 'IT Officer & Systems Specialist',
  subtitles: [
    'IT Systems & Infrastructure Specialist',
    'Website Administrator & Web Developer',
    'Database & Records Manager',
    'Graphics & Multimedia Designer'
  ],
  email: 'scoviaipodu8@gmail.com',
  phone: '0774390069',
  internationalPhone: '+256 774 390 069',
  whatsappUrl: 'https://wa.me/256774390069',
  location: 'Uganda (Kampala / Ngora / Soroti / Mbale)',
  bio: 'IT Officer and systems specialist with 3 years at DECODI and broad experience across education, healthcare, and community development. Strong in infrastructure support, web and database administration, staff training, and creative media.',
  cvSummary: 'IT Officer with 3 years at Destiny Community Development Initiative (DECODI) and a proven record in systems administration, web and database management, technical support, and team training across Ugandan institutions.',
  metrics: [
    { label: 'Years at DECODI', value: '3' },
    { label: 'Years of IT Experience', value: '5+' },
    { label: 'Staff & Students Trained', value: '150+' },
    { label: 'Academic GPA (BSc. IT)', value: '4.5' },
  ]
};

export const cvExperienceIds = [
  'decodi',
  'mukura-ss',
  'lao-tech',
  'bethesda-hospital',
  'ndejje-ss',
];

export const cvAdditionalExperience = [
  "Children's Hope Chest — UG-LEDP Trainee & Community Advocate (2022)",
  'ACHEST Organization — IT & Database Systems Intern (2019)',
];

export const experiences: ExperienceItem[] = [
  {
    id: 'decodi',
    role: 'IT Officer',
    organization: 'Destiny Community Development Initiative (DECODI)',
    location: 'Uganda',
    period: '08/2023 – Present',
    type: 'Full-time',
    category: 'it-systems',
    description: 'Leads IT operations, web administration, database management, and staff digital support for community development programs.',
    highlights: [
      'Manages organizational IT systems, networks, and day-to-day technical support.',
      'Administers websites, databases, and digital records for program delivery.',
      'Trains staff on systems, data tools, and secure computing practices.',
    ],
    technologies: ['IT Systems', 'Web Administration', 'Databases', 'Staff Training'],
  },
  {
    id: 'mukura-ss',
    role: 'ICT Lab Technician & ICT Teacher',
    organization: 'Mukura Memorial Secondary School',
    location: 'Ngora-Mukura, Uganda',
    period: '10/2022 – 07/2024',
    type: 'Full-time',
    category: 'it-systems',
    description: 'Managed IT infrastructure, computer lab operations, and ICT teaching at a secondary school.',
    highlights: [
      'Maintained networks, servers, hardware, and security updates across the ICT department.',
      'Provided technical support and digital safety training for staff and students.',
      'Taught Computer Studies and managed the school website.',
    ],
    technologies: ['Network & Server Admin', 'Cybersecurity', 'Web Admin', 'ICT Teaching'],
  },
  {
    id: 'lao-tech',
    role: 'Software & Systems Intern Associate',
    organization: 'LAO Tech Systems Company',
    location: 'Mbale, Uganda',
    period: '05/2023 – 09/2023',
    type: 'Internship',
    category: 'web-software',
    description: 'Supported client projects in web development, graphic design, databases, and systems maintenance.',
    highlights: [
      'Built and maintained WordPress websites and marketing graphics.',
      'Developed application modules and managed relational databases.',
      'Performed hardware diagnostics and preventive system maintenance.',
    ],
    technologies: ['WordPress', 'Adobe Suite', 'Java/C', 'Databases', 'Hardware Support'],
  },
  {
    id: 'bethesda-hospital',
    role: 'Assistant IT Officer Intern',
    organization: 'Bethesda Hospital',
    location: 'Soroti-Oderai, Uganda',
    period: '04/2020 – 08/2021',
    type: 'Internship',
    category: 'it-systems',
    description: 'Supported hospital IT systems, patient records, staff training, and web maintenance.',
    highlights: [
      'Trained 20+ healthcare staff on portals, data entry, and digital workflows.',
      'Managed patient records and resolved network and software issues.',
      'Maintained the hospital website and document indexing processes.',
    ],
    technologies: ['Healthcare IT', 'Records Management', 'Staff Training', 'Web Support'],
  },
  {
    id: 'children-hope-chest',
    role: 'UG-LEDP Trainee & Community Advocate',
    organization: "Children's Hope Chest",
    location: 'Soroti, Uganda',
    period: '05/2022 – 08/2022',
    type: 'Training',
    category: 'education-training',
    description: 'Community advocacy, entrepreneurship training, and organizational development support.',
    highlights: [
      'Facilitated workshops on advocacy, entrepreneurship, and youth leadership.',
      'Assessed institutional needs and supported resource planning.',
    ],
    technologies: ['Advocacy', 'Training', 'Community Development'],
    cvInclude: false,
  },
  {
    id: 'ndejje-ss',
    role: 'ICT Teacher & Media Coordinator',
    organization: 'Ndejje Secondary School',
    location: 'Luwero, Uganda',
    period: '04/2019 – 02/2020',
    type: 'Full-time',
    category: 'education-training',
    description: 'Coordinated ICT lab operations, school media, and student computer instruction.',
    highlights: [
      'Managed lab equipment, hardware servicing, and software installations.',
      'Handled school web presence, media, and event photography.',
      'Taught foundational ICT to secondary students.',
    ],
    technologies: ['Lab Management', 'Media & Photography', 'ICT Teaching'],
  },
  {
    id: 'achest-org',
    role: 'IT & Database Systems Intern',
    organization: 'ACHEST Organization',
    location: 'Kololo, Kampala, Uganda',
    period: '06/2019 – 08/2019',
    type: 'Internship',
    category: 'web-software',
    description: 'Supported mobile data tools, databases, and information security during internship.',
    highlights: [
      'Worked on database systems, security protocols, and hardware troubleshooting.',
      'Contributed to Android and KoboCollect field data collection tools.',
    ],
    technologies: ['Databases', 'Mobile Data Tools', 'Information Security'],
    cvInclude: false,
  }
];

export const education: EducationItem[] = [
  {
    id: 'kumi-uni',
    institution: 'Kumi University',
    degree: 'Bachelor of Science in Information Technology (BSc. IT)',
    score: 'CGPA: 4.5 / 5.0 (First Class Standing)',
    period: '2023 – 2025',
    location: 'Kumi, Uganda',
    details: 'Advanced studies in systems administration, network security, software engineering, database management systems, and web technologies.',
    honors: 'Top Academic Achiever & Women\'s Football Team Player'
  },
  {
    id: 'ndejje-uni',
    institution: 'Ndejje University',
    degree: 'Diploma in Information Technology (Dip. IT)',
    score: 'CGPA: 3.6 / 5.0 (Class Distinction)',
    period: '08/2019 – 11/2021',
    location: 'Luwero / Kampala, Uganda',
    details: 'Foundational coursework in computer hardware & networking, database design, programming principles (Java/C), and web authoring.',
    honors: 'Practical ICT Demonstration Lead'
  },
  {
    id: 'mukura-uace',
    institution: 'Mukura Memorial Secondary School',
    degree: 'Uganda Advanced Certificate of Education (UACE)',
    score: 'Passed with Distinction (Aggregate 6)',
    period: '02/2016 – 11/2019',
    location: 'Ngora, Uganda',
    details: 'Principal focus on science, mathematics, and computing fundamentals.'
  },
  {
    id: 'soroti-uce',
    institution: 'Soroti Municipal Secondary School',
    degree: 'Uganda Certificate of Education (UCE)',
    score: 'Division 2',
    period: '02/2010 – 11/2013',
    location: 'Soroti, Uganda',
    details: 'Secondary educational certification with distinction in computer literacy and sciences.'
  },
  {
    id: 'kaler-ple',
    institution: 'Kaler Primary School',
    degree: 'Primary Leaving Examination (PLE)',
    score: 'Division 2',
    period: '03/2003 – 10/2009',
    location: 'Uganda',
    details: 'Primary foundational education.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'it-infrastructure',
    name: 'IT & Infrastructure',
    iconName: 'Server',
    description: 'Hardware, networks, servers, and technical support.',
    skills: [
      { name: 'Hardware & Network Systems', level: 92, tag: 'Core' },
      { name: 'Server & Lab Management', level: 90, tag: 'Operations' },
      { name: 'Technical Support & Security', level: 93, tag: 'Support' },
    ]
  },
  {
    id: 'web-software',
    name: 'Web & Software',
    iconName: 'Code',
    description: 'Websites, programming, and mobile data tools.',
    skills: [
      { name: 'Web Development & CMS', level: 90, tag: 'Web' },
      { name: 'Programming (Java / C)', level: 84, tag: 'Software' },
      { name: 'Mobile & Data Collection', level: 86, tag: 'Mobile' },
    ]
  },
  {
    id: 'database-data',
    name: 'Database & Records',
    iconName: 'Database',
    description: 'Data management, records, and backups.',
    skills: [
      { name: 'Database Administration', level: 90, tag: 'Data' },
      { name: 'Records & Data Management', level: 92, tag: 'Records' },
      { name: 'Backup & Data Integrity', level: 88, tag: 'Integrity' },
    ]
  },
  {
    id: 'graphics-multimedia',
    name: 'Design & Media',
    iconName: 'Palette',
    description: 'Creative design, publishing, and multimedia.',
    skills: [
      { name: 'Adobe Creative Suite', level: 90, tag: 'Design' },
      { name: 'Print & Digital Publishing', level: 90, tag: 'Publishing' },
      { name: 'Photography & Video', level: 85, tag: 'Media' },
    ]
  },
  {
    id: 'leadership-mentorship',
    name: 'Training & Leadership',
    iconName: 'Users',
    description: 'Instruction, mentorship, and team support.',
    skills: [
      { name: 'Staff & Team Training', level: 95, tag: 'Training' },
      { name: 'ICT Education', level: 94, tag: 'Education' },
      { name: 'Community & Advocacy', level: 90, tag: 'Leadership' },
    ]
  }
];

export const coreTools = [
  'WordPress',
  'Adobe Suite',
  'SQL / DBMS',
  'Java & C',
  'Network & Server Tools',
  'Microsoft Office',
];

export const projects: ProjectItem[] = [
  {
    id: 'graphics-publications',
    title: 'Society Annual Magazine & Visual Branding',
    category: 'Graphics & Publishing',
    period: '06/2020 – 08/2024',
    description: 'Directed editorial publishing, visual typography, magazine layout spreads, and brand identity assets for organizational societies.',
    longDescription: 'Led end-to-end creative direction for society annual print and digital magazines. Coordinated content layout, typography hierarchy, high-resolution vector artwork, and press-ready formatting using Adobe Illustrator and Photoshop. Also produced visual collateral including promotional banners, event badges, and corporate letterheads.',
    highlights: [
      'Managed multi-page magazine layout compilation and quality control for annual distributions.',
      'Crafted custom vector illustrations, brand marks, and typography guidelines.',
      'Coordinated printing house technical parameters (CMYK color grading, bleed margins, binding formats).'
    ],
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign Layouts', 'Print Media', 'Typography'],
    image: magazineImg,
    featured: true
  },
  {
    id: 'it-infrastructure-deployment',
    title: 'Institutional IT Lab & Security Infrastructure',
    category: 'IT Systems & Networking',
    period: '10/2022 – 07/2024',
    description: 'Comprehensive network management, server hardware provisioning, security updates, and computer laboratory overhaul.',
    longDescription: 'Spearheaded modernization of educational and enterprise computer laboratory setups. Implemented standardized OS deployment images, centralized driver repositories, automated BIOS/firmware update sequences, and network switch configuration ensuring zero downtime during high-stakes practical examinations.',
    highlights: [
      'Engineered a robust hardware maintenance cycle covering over 40+ workstation terminals.',
      'Implemented proactive security updates, malware protection, and network isolation.',
      'Conducted digital safety and cybersecurity best-practice training for educational faculty.'
    ],
    technologies: ['Server Hardware', 'LAN / Switch Routing', 'OS Image Deployment', 'BIOS Flashing', 'Cybersecurity'],
    image: magazineImg,
    featured: true
  },
  {
    id: 'hospital-records-system',
    title: 'Hospital Patient Data & Informatics Workflow',
    category: 'Database & Healthcare IT',
    period: '04/2020 – 08/2021',
    description: 'Healthcare record digitisation, medical staff database training, and clinical portal maintenance at Bethesda Hospital.',
    longDescription: 'Assisted in streamlining hospital data entry pipelines, reducing record lookup latency and transcription errors. Trained 20+ healthcare practitioners on internal digital workflow tools and managed routine database health, index rebuilding, and secure data backups.',
    highlights: [
      'Trained 20+ nurses, doctors, and records staff on computer basics and portal operations.',
      'Managed systematic patient data entry and query responses across hospital departments.',
      'Ensured continuous availability of hospital web services and patient document packaging.'
    ],
    technologies: ['Healthcare Databases', 'Patient Records Informatics', 'Staff Training', 'Data Packaging', 'Web Portal Support'],
    image: magazineImg,
    featured: true
  },
  {
    id: 'photography-videography',
    title: 'Media Production & Event Videography',
    category: 'Multimedia & Photography',
    period: '01/2020 – 01/2022',
    description: 'Professional event photography, high-definition video recording, audio synchronization, and post-production compilation.',
    longDescription: 'Captured commercial and institutional events, institutional milestones, and sports matches. Delivered color-graded photograph sets and edited highlight video reels with soundtrack synchronization and visual title cards.',
    highlights: [
      'Conducted field photography sessions capturing high-dynamic-range natural light portraits and action shots.',
      'Compiled and edited multi-clip video footage with seamless audio transitions and lower thirds.',
      'Maintained digital media archives for social media channels and institutional archives.'
    ],
    technologies: ['DSLR Photography', 'Video Editing Suite', 'Color Grading', 'Audio Sync', 'Social Media Publishing'],
    image: magazineImg,
    featured: false
  },
  {
    id: 'kobocollect-mobile-data',
    title: 'Mobile Data Collection & Android Field Systems',
    category: 'Software & Mobile',
    period: '06/2019 – 08/2019',
    description: 'Deployment and form customization of KoboCollect Android application for public health surveys and field data gathering.',
    longDescription: 'Customized XLSForm logic and validated mobile data collection forms using KoboCollect for field workers. Structured offline caching routines, geolocation tagging parameters, and centralized server data aggregation.',
    highlights: [
      'Structured automated skip-logic and validation constraints for field survey tools.',
      'Trained field agents on mobile device synchronization and offline data gathering.',
      'Integrated aggregated dataset exports for statistical and spatial analysis.'
    ],
    technologies: ['Android', 'KoboCollect', 'XLSForm', 'Data Aggregation', 'Mobile Surveys'],
    image: magazineImg,
    featured: false
  }
];

export const references: ReferenceItem[] = [
  {
    id: 'aluka-margaret',
    name: 'Aluka Margaret',
    role: 'Headteacher',
    organization: 'Mukura Memorial Secondary School',
    phone: '+256 774 814 215',
    relationship: 'Direct Supervisor & Institutional Head during ICT Teaching & Lab Management tenure'
  },
  {
    id: 'omaswa-francis',
    name: 'Omaswa Francis',
    role: 'Manager (Ngora Data Center)',
    organization: 'ACHEST Organization',
    phone: '+256 779 963 833',
    email: 'fomaswa93@gmail.com',
    relationship: 'Internship Supervisor & Data Center Operations Manager'
  },
  {
    id: 'okecho-ezra',
    name: 'Okecho Ezra',
    role: 'Projects Manager',
    organization: "Children's Hope Chest",
    phone: '+256 773 014 312',
    relationship: 'Program Manager & Leadership Trainer during UG-LEDP Trainee Program'
  }
];

export const personalInterests: PersonalInterest[] = [
  {
    title: "Women's Football",
    description: "Active player on the Kumi University Women's Football Team, fostering teamwork, rapid decision making, endurance, and competitive discipline.",
    iconName: 'Trophy',
    badge: 'Kumi University Team'
  },
  {
    title: 'Motorcycle Enthusiast',
    description: 'Passionate about mechanics and learning how to ride and maintain different models of motorcycles, embodying agility, focus, and technical curiosity.',
    iconName: 'Compass',
    badge: 'Riding & Mechanics'
  },
  {
    title: 'Travel & Social Exploration',
    description: 'Exploring diverse cultures, landscapes, and social communities across Uganda and East Africa to gain fresh perspectives on community empowerment.',
    iconName: 'Globe',
    badge: 'Cultural Discovery'
  }
];
