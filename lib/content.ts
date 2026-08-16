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
  availabilityBadge: 'Available for opportunities',
  // Main hero headline (your name is highlighted automatically)
  heroGreeting: "Hi, I'm",
  // Short summary under the headline
  heroSummary:
    'An undergraduate bridging the gap between Technology, Management, and Data Analysis.',
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
    body: 'Currently pursuing a BSc in Information Technology at the University of Kelaniya and a BSc (Hons) in International Business Management at the University of Staffordshire (APIIT Sri Lanka).',
  },
  {
    icon: 'target',
    title: 'Career Goals',
    body: 'Aspiring to leverage management frameworks, technical tools, and data-driven insights to lead impactful tech and business initiatives.',
  },
  {
    icon: 'sparkles',
    title: 'Technical Interests',
    body: 'Project Management, Business Analysis, and Data Analysis.',
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
    items: ['GitHub', 'DoIT', 'TaskHub', 'PickMe', 'Uber', 'Zoom', 'Google Meet'],
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
    title: 'hackX 2026',
    role: 'Project Manager',
    body: 'Coordinated partnerships with government science foundations and private tech solutions.',
    githubUrl: 'https://github.com/tharushi-k6632',
    liveUrl: '',
  },
  {
    title: 'Exposition Project (DoIT System)',
    role: 'Project Manager',
    body: 'Managed task tracking and project delivery.',
    githubUrl: 'https://github.com/tharushi-k6632',
    liveUrl: '',
  },
  {
    title: 'Rootcode Designathon',
    role: 'Designer',
    body: 'Developed and submitted design prototypes during an intensive hackathon challenge.',
    githubUrl: 'https://github.com/tharushi-k6632',
    liveUrl: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  EDUCATION — chronological timeline                                        */
/* -------------------------------------------------------------------------- */
export const education = [
  {
    school: 'University of Kelaniya',
    degree: 'BSc in Information Technology',
  },
  {
    school: 'University of Staffordshire (APIIT Sri Lanka)',
    degree: 'BSc (Hons) in International Business Management',
  },
  {
    school: 'Wisdom Business Academy',
    degree: 'CIMA Certification (Ongoing)',
  },
]

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE — leadership & volunteering                                    */
/* -------------------------------------------------------------------------- */
export const experience = [
  {
    org: 'ideasprint (Team Red)',
    body: 'Participated and evaluated proposals.',
  },
  {
    org: 'IM Talents',
    body: 'Scripting and compering for organizational events.',
  },
  {
    org: 'IM Dansala',
    body: 'Event planning, logistics, and drafting official documentation.',
  },
  {
    org: "Industrial Management Students' Association",
    body: 'Drafted official vision and mission statements and researched student development interventions.',
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
    title: 'Rootcode Designathon Participant',
    meta: 'August 2024',
  },
]

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
