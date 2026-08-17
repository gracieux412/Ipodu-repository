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
  email: 'scoviaipodu@gmail.com',
  phone: '0774390069',
  internationalPhone: '+256 774 390 069',
  whatsappUrl: 'https://wa.me/256774390069',
  location: 'Uganda (Kampala / Ngora / Soroti / Mbale)',
  bio: 'Professional, highly skilled IT Officer with 3+ years of progressive experience in IT infrastructure management, website development and administration, database architecture, troubleshooting, and enterprise tech support. Proven track record in training cross-functional staff, securing institutional networks, and delivering high-impact multimedia designs.',
  metrics: [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Staff & Students Trained', value: '150+' },
    { label: 'Academic GPA (BSc. IT)', value: '4.5' },
    { label: 'Systems & Web Deployments', value: '10+' },
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: 'mukura-ss',
    role: 'ICT Lab Technician & ICT Teacher',
    organization: 'Mukura Memorial Secondary School',
    location: 'Ngora-Mukura, Uganda',
    period: '10/2022 – 07/2024',
    type: 'Full-time',
    category: 'it-systems',
    description: 'Directed institutional IT infrastructure, laboratory operations, cybersecurity maintenance, and secondary computer studies curriculum.',
    highlights: [
      'Managed end-to-end IT infrastructure across the department, including network switches, server hardware, OS patches, security updates, peripheral drivers, and BIOS firmware flashing.',
      'Provided tier-1 and tier-2 technical support for school staff and conducted digital security and data protection training workshops.',
      'Delivered structured Computer Studies instruction and administered the official school website updates and performance.',
      'Maintained 100% operational uptime for the central computer lab during national academic examinations.'
    ],
    technologies: ['Network Hardware', 'Server Management', 'BIOS/OS Patching', 'Cybersecurity', 'Web Administration', 'Computer Studies Pedagogy']
  },
  {
    id: 'lao-tech',
    role: 'Software & Systems Intern Associate',
    organization: 'LAO Tech Systems Company',
    location: 'Mbale, Uganda',
    period: '05/2023 – 09/2023',
    type: 'Internship',
    category: 'web-software',
    description: 'Delivered website development, graphic design, database architecture, and computer systems engineering for client projects.',
    highlights: [
      'Executed full website design, configuration, and ongoing maintenance using WordPress CMS and custom web styling.',
      'Created modern vector graphics, branding identities, and marketing layouts with Adobe Illustrator and Adobe Photoshop.',
      'Engineered software application logic and modules utilizing Java and C programming languages.',
      'Administered relational databases, performing schema maintenance, indexing, and automated backup routines.',
      'Conducted hardware diagnostics, component replacements, board repairs, and preventive system maintenance.'
    ],
    technologies: ['WordPress', 'Adobe Photoshop', 'Adobe Illustrator', 'Java', 'C Language', 'SQL / Databases', 'Hardware Diagnostics']
  },
  {
    id: 'bethesda-hospital',
    role: 'Assistant IT Officer Intern',
    organization: 'Bethesda Hospital',
    location: 'Soroti-Oderai, Uganda',
    period: '04/2020 – 08/2021',
    type: 'Internship',
    category: 'it-systems',
    description: 'Spearheaded medical informatics support, healthcare database entries, staff technical training, and web maintenance.',
    highlights: [
      'Trained over 20 clinical and administrative healthcare workers on internal web portals, electronic medical data entry, and digital essentials.',
      'Managed accurate patient record data entry, verification, and retrieval within the hospital central database.',
      'Maintained mission-critical healthcare systems, resolving network and software trouble tickets swiftly.',
      'Maintained the hospital official website and structured document indexing pipelines into standard compliant formats.'
    ],
    technologies: ['Healthcare Databases', 'Patient Records Management', 'Hospital Web Portal', 'Staff IT Training', 'Network Troubleshooting']
  },
  {
    id: 'children-hope-chest',
    role: 'UG-LEDP Trainee & Community Advocate',
    organization: "Children's Hope Chest",
    location: 'Soroti, Uganda',
    period: '05/2022 – 08/2022',
    type: 'Training',
    category: 'education-training',
    description: 'Advocacy, entrepreneurship training, organizational vulnerability assessments, and resource utilization optimization.',
    highlights: [
      'Facilitated workshops on child advocacy rights, self-awareness development, and youth entrepreneurship competencies.',
      'Conducted research to identify institutional vulnerabilities and formulated resource optimization strategies.',
      'Trained participants on professional workplace ethics, sustainable livelihoods, and community leadership.'
    ],
    technologies: ['Advocacy Frameworks', 'Resource Optimization', 'Vulnerability Assessment', 'Youth Mentorship', 'Ethics & Leadership']
  },
  {
    id: 'ndejje-ss',
    role: 'ICT Teacher & Media Coordinator',
    organization: 'Ndejje Secondary School',
    location: 'Luwero, Uganda',
    period: '04/2019 – 02/2020',
    type: 'Full-time',
    category: 'education-training',
    description: 'Coordinated computer lab operations, school website & media channels, photography, and student ICT instruction.',
    highlights: [
      'Managed computer laboratory equipment, routine hardware servicing, and software installations.',
      'Administered school digital media platforms, official web presence, and event photography.',
      'Instructed secondary school students in foundational computer literacy and applied ICT concepts.'
    ],
    technologies: ['Lab Management', 'Event Photography', 'Social Media Management', 'Hardware Maintenance', 'ICT Curriculum']
  },
  {
    id: 'achest-org',
    role: 'IT & Database Systems Intern',
    organization: 'ACHEST Organization',
    location: 'Kololo, Kampala, Uganda',
    period: '06/2019 – 08/2019',
    type: 'Internship',
    category: 'web-software',
    description: 'Contributed to Android mobile data collection tools, relational database systems, and information security.',
    highlights: [
      'Acquired and applied advanced skills in database architecture, querying, and system maintenance.',
      'Implemented digital information security protocols and safe computing standards.',
      'Performed preventative computer hardware repairs and software troubleshooting.',
      'Contributed to Android mobile development and customized data collection forms via KoboCollect.'
    ],
    technologies: ['Android Development', 'KoboCollect', 'Database Management', 'Information Security', 'Hardware Repair']
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
    name: 'IT Infrastructure & Hardware',
    iconName: 'Server',
    description: 'Enterprise hardware diagnosis, networking equipment, server configuration, and firmware management.',
    skills: [
      { name: 'Computer Hardware & Maintenance', level: 95, tag: 'Core' },
      { name: 'Server & Network Administration', level: 90, tag: 'Infrastructure' },
      { name: 'OS Patches, Drivers & BIOS Updates', level: 92, tag: 'Systems' },
      { name: 'Technical Support & Helpdesk', level: 95, tag: 'Support' },
      { name: 'Lab & Equipment Management', level: 94, tag: 'Operations' },
      { name: 'Information & System Security', level: 88, tag: 'Security' }
    ]
  },
  {
    id: 'web-software',
    name: 'Web & Software Engineering',
    iconName: 'Code',
    description: 'Modern content management, programming logic, frontend development, and mobile collection tooling.',
    skills: [
      { name: 'WordPress Development & Management', level: 92, tag: 'Web' },
      { name: 'Java Programming', level: 85, tag: 'Software' },
      { name: 'C Programming Language', level: 82, tag: 'Software' },
      { name: 'HTML5 / CSS3 / JavaScript', level: 88, tag: 'Frontend' },
      { name: 'Android & KoboCollect Integration', level: 86, tag: 'Mobile Data' },
      { name: 'Web Hosting & Maintenance', level: 90, tag: 'DevOps' }
    ]
  },
  {
    id: 'database-data',
    name: 'Database & Records Management',
    iconName: 'Database',
    description: 'Database architecture, data validation pipelines, hospital informatics, and structured backup integrity.',
    skills: [
      { name: 'Database Administration (DBMS)', level: 90, tag: 'Data' },
      { name: 'SQL Querying & Schema Design', level: 85, tag: 'Database' },
      { name: 'Hospital & Patient Data Systems', level: 92, tag: 'Healthcare' },
      { name: 'Data Validation & Formatting', level: 94, tag: 'Data Entry' },
      { name: 'Backup & Recovery Procedures', level: 88, tag: 'Integrity' }
    ]
  },
  {
    id: 'graphics-multimedia',
    name: 'Graphics, Design & Media',
    iconName: 'Palette',
    description: 'Editorial magazine design, vector illustration, digital photo editing, and video compilation.',
    skills: [
      { name: 'Adobe Photoshop', level: 90, tag: 'Design' },
      { name: 'Adobe Illustrator', level: 88, tag: 'Vector' },
      { name: 'Magazine & Editorial Publishing', level: 92, tag: 'Print & Digital' },
      { name: 'Commercial Photography', level: 85, tag: 'Media' },
      { name: 'Videography & Video Editing', level: 84, tag: 'Video' }
    ]
  },
  {
    id: 'leadership-mentorship',
    name: 'Leadership, Training & Advocacy',
    iconName: 'Users',
    description: 'Empowering teams through structured computer training, student instruction, and community advocacy.',
    skills: [
      { name: 'Staff & Medical Team Training', level: 95, tag: 'Instruction' },
      { name: 'ICT Curriculum Teaching', level: 96, tag: 'Education' },
      { name: 'Problem Solving & Analytical Thinking', level: 94, tag: 'Strategy' },
      { name: 'Child Advocacy & Community Mentorship', level: 90, tag: 'Social Impact' },
      { name: 'Cross-functional Communication', level: 95, tag: 'Soft Skills' }
    ]
  }
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
