/**
 * =============================================================================
 *  SITE CONTENT — EDIT EVERYTHING HERE
 * =============================================================================
 *  This is the single source of truth for all text/links on the portfolio.
 *  Update the values below and the whole site updates automatically.
 *  You do NOT need to touch any component files.
 *
 *  Notes:
 *  - Keep the quotes around each value.
 *  - For apostrophes inside text (e.g. "Let's"), just type them normally.
 *  - "icon" fields use a fixed keyword — allowed values are listed in comments.
 *  - To add/remove an item in a list, copy an existing { ... } block.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  BASICS — name, initials, tagline                                          */
/* -------------------------------------------------------------------------- */
export const profile = {
  fullName: 'Tharushi Kulathunga',
  // Shown in the top-left of the navbar, e.g. "TK."
  initials: 'TK',
  // Small pill above the headline in the hero
  availabilityBadge: 'Open to opportunities',
  // Main hero headline (your name is highlighted automatically)
  heroGreeting: "Hi, I'm",
  // Short summary under the headline
  heroSummary:
    'An undergraduate bridging Technology, Management, and Data to turn ideas into impactful solutions.',
  // Path to your photo (place the image file in the /public folder)
  photo: '/tharushi-portrait.png',
  photoAlt: 'Portrait of Tharushi Kulathunga',
}

/* -------------------------------------------------------------------------- */
/*  ABOUT ME                                                                  */
/*  icon options: 'graduation' | 'target' | 'sparkles'                        */
/* -------------------------------------------------------------------------- */
export const about = [
  {
    icon: 'graduation',
    title: 'Background',
    body: 'Currently pursuing a BSc (Hons) in International Business Management at the University of Staffordshire through APIIT Sri Lanka, alongside a BSc in Information Technology at the University of Kelaniya.',
  },
  {
    icon: 'target',
    title: 'Career Goals',
    body: 'Aspiring to combine business knowledge, technology, and data-driven insights to contribute to impactful projects and lead technology-driven business initiatives.',
  },
  {
    icon: 'sparkles',
    title: 'Technical Interests',
    body: 'Project Management, Business Analysis, Data Analysis, and Technology-driven Business Solutions.',
  },
]

/* -------------------------------------------------------------------------- */
/*  SKILLS — grouped pill tags                                                */
/* -------------------------------------------------------------------------- */
export const skills = [
  {
    title: 'Core Focus',
    items: ['Project Management', 'Business Analysis', 'Data Analysis'],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'Microsoft Office', 'Canva', 'Figma', 'Jira', 'Trello'],
  },
  {
    title: 'Management & Methodologies',
    items: ['Agile Project Management', 'Event Coordination', 'Business Strategy'],
  },
]

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                  */
/*  - Set githubUrl / liveUrl to a real link, or leave '' to hide the button. */
/* -------------------------------------------------------------------------- */
export const projects = [
  {
    title: 'DoIT Task Management System',
    role: 'DevOps & QA',
    body: 'Contributed to DevOps and quality assurance activities, supporting task management, testing, and reliable project delivery.',
    githubUrl: 'https://github.com/T-Bhagya/task-management-system',
    liveUrl: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  EDUCATION — chronological timeline                                        */
/* -------------------------------------------------------------------------- */
export const education = [
  {
    school: 'University of Staffordshire (APIIT Sri Lanka)',
    degree: 'BSc (Hons) in International Business Management',
  },
  {
    school: 'University of Kelaniya',
    degree: 'BSc in Information Technology',
  },
  {
    school: 'Visakha Vidyalaya, Colombo 04',
    degree: 'G.C.E. Advanced Level — Physical Science with ICT',
  },
  {
    school: "St. Lawrence's Convent, Colombo 06",
    degree: 'Secondary Education',
  },
]

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE — leadership & extracurricular involvement                     */
/* -------------------------------------------------------------------------- */
export const experience = [
  {
    org: 'hackX 11.0',
    body: 'Chief Coordinator, supporting the planning, coordination, and execution of the national-level hackathon and startup challenge.',
  },
  {
    org: 'ideasprint 2026',
    body: 'Organizing Committee Member, contributing to event planning, coordination, and participant engagement.',
  },
  {
    org: 'Rotaract Club of APIIT',
    body: 'Member, contributing to community-focused initiatives, events, and extracurricular activities.',
  },
  {
    org: 'Industrial Management Science Students’ Association',
    body: 'Committee Member in 2025 and Member in 2026, contributing to content writing, event coordination, and association activities.',
  },
  {
    org: 'IMSSA Events',
    body: 'Compered the IMSSA AGM 2025 and contributed to events including SECRET OPS: CODFEST 2025, IM Talent Show 2025, and INCO 2026.',
  },
]

/* -------------------------------------------------------------------------- */
/*  CERTIFICATIONS & ACHIEVEMENTS                                             */
/*  icon options: 'award' | 'medal'                                           */
/* -------------------------------------------------------------------------- */
export const certifications = [
  {
    icon: 'award',
    title: 'Pursuing CIMA Certification',
    meta: 'In progress',
  },
  {
    icon: 'medal',
    title: 'Trinity College London Grade 6 — Performing Text',
    meta: 'Completed',
  },
  {
    icon: 'medal',
    title: 'IWMS Grade 6 — Spoken English',
    meta: 'Completed',
  },
]

export const certificationsLink = {
  label: 'View all certifications on LinkedIn',
  href: 'https://www.linkedin.com/in/tharushi-kulathunga-4402622b8/details/certifications/',
}

/* -------------------------------------------------------------------------- */
/*  RESUME / CV                                                               */
/*  Place your PDF in /public and point resumeFile at it.                     */
/* -------------------------------------------------------------------------- */
export const resume = {
  heading: 'Interested in working together?',
  body: 'Grab a copy of my resume for a full overview of my experience, skills, and academic journey.',
  buttonLabel: 'Download Resume',
  resumeFile: '/tharushi-kulathunga-resume.pdf',
}

/* -------------------------------------------------------------------------- */
/*  CONTACT — footer links                                                    */
/*  icon options: 'mail' | 'linkedin' | 'github'                              */
/*  - For email use "mailto:you@example.com" as the href.                     */
/* -------------------------------------------------------------------------- */
export const contact = {
  heading: "Let's connect",
  items: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'tharushi@gmail.com',
      href: 'mailto:tharushi@gmail.com',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'tharushi-kulathunga',
      href: 'https://www.linkedin.com/in/tharushi-kulathunga-4402622b8/',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'tharushi-k6632',
      href: 'https://github.com/tharushi-k6632',
    },
  ],
}
