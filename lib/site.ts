export const SITE = {
  name: 'William A. Presti Center For Families And Youth',
  shortName: 'William A. Presti Center',
  url: 'https://brightontherapytreatment.com',
  phone: '810-626-3282',
  phoneRaw: '+18106263282',
  phoneDisplay: '(810) 626-3282',
  email: 'info@brightontherapytreatment.com',
  address: {
    street: '8123 Grand River Avenue, Suite 3',
    city: 'Brighton',
    state: 'MI',
    zip: '48114',
    country: 'US',
  },
  hours: 'Monday – Friday: 10:00 AM – 7:00 PM',
  pricing: '$82 flat fee per session',
  geo: {
    latitude: 42.5448,
    longitude: -83.8147,
  },
  serviceAreas: [
    'Brighton',
    'Howell',
    'Milford',
    'South Lyon',
    'Hartland',
    'Fenton',
    'Pinckney',
    'Whitmore Lake',
    'Hamburg Township',
  ],
  socials: {
    // Add when available
  },
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Staff', href: '/staff' },
  { label: 'Teletherapy', href: '/teletherapy' },
  { label: 'Family Workshop', href: '/family-workshop' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    slug: 'add-therapy',
    title: 'ADD / ADHD Therapy',
    shortTitle: 'ADD Therapy',
    audience: 'Children, Teens & Adults',
    summary:
      'Personalized strategies for focus, executive function, and emotional regulation — without judgment.',
  },
  {
    slug: 'anxiety-therapy',
    title: 'Anxiety Therapy',
    shortTitle: 'Anxiety Therapy',
    audience: 'All Ages',
    summary:
      'Evidence-based treatment to quiet the noise and help you feel grounded again.',
  },
  {
    slug: 'autism-spectrum-disorder',
    title: 'Autism Spectrum Therapy',
    shortTitle: 'Autism Spectrum Disorder',
    audience: 'Children, Teens & Adults',
    summary:
      'Affirming, neurodiversity-informed support that meets you where you are.',
  },
  {
    slug: 'childrens-therapy',
    title: "Children's Therapy",
    shortTitle: "Children's Therapy",
    audience: 'Ages 5–12',
    summary:
      'Play-based, developmentally-attuned therapy that gives kids language for big feelings.',
  },
  {
    slug: 'depression-therapy',
    title: 'Depression Therapy',
    shortTitle: 'Depression Therapy',
    audience: 'All Ages',
    summary:
      'A compassionate path forward when everything feels heavy or numb.',
  },
  {
    slug: 'couples-counseling',
    title: 'Couples Counseling',
    shortTitle: 'Couples Counseling',
    audience: 'Couples',
    summary:
      'Repair connection, rebuild trust, and learn to talk to each other again.',
  },
  {
    slug: 'couples-coaching',
    title: 'Couples Coaching',
    shortTitle: 'Couples Coaching',
    audience: 'Couples',
    summary:
      'Forward-focused coaching for couples who want practical tools, fast.',
  },
  {
    slug: 'teenage-therapy',
    title: 'Teen Therapy',
    shortTitle: 'Teen Therapy',
    audience: 'Ages 13–18',
    summary:
      'A space teens actually want to come to — confidential, real, and on their terms.',
  },
  {
    slug: 'teen-coaching',
    title: 'Teen Coaching',
    shortTitle: 'Teen Coaching',
    audience: 'Ages 13–18',
    summary:
      'Goal-driven mentoring for school, friendships, identity, and what comes next.',
  },
  {
    slug: 'coaching-and-mentoring',
    title: 'Coaching & Mentoring',
    shortTitle: 'Coaching & Mentoring',
    audience: 'All Ages',
    summary:
      'Certified coaches partnering with you on goals, growth, and accountability.',
  },
  {
    slug: 'adult-counseling',
    title: 'Adult Counseling',
    shortTitle: 'Adult Counseling',
    audience: 'Adults',
    summary:
      'A confidential space to be heard — for anxiety, life transitions, grief, and more.',
  },
];

// Local photo assets — dimensions matter for Next.js Image component
// (prevents cumulative layout shift and enables responsive srcset)
export const IMAGES = {
  hero: { src: '/images/hero.jpg', width: 1920, height: 2878, alt: 'Brick building with painted mural asking "How are you, really?"' },
  warmChat: { src: '/images/warmchat.jpg', width: 1600, height: 1066, alt: 'Two women in a warm, supportive conversation with a therapist' },
  therapist: { src: '/images/therapist.jpg', width: 1400, height: 787, alt: 'Experienced therapist in conversation with a client in a light, warm office' },
  couples: { src: '/images/couples.jpg', width: 1400, height: 787, alt: 'Couple in counseling session with therapist' },
  couples2: { src: '/images/couples2.jpg', width: 1400, height: 787, alt: 'Teenage girl in conversation with a therapist in a bright office' },
  teen: { src: '/images/teen1.jpg', width: 1400, height: 787, alt: 'Teen in hoodie talking with a therapist' },
  group: { src: '/images/group.jpg', width: 1400, height: 787, alt: 'Two women in a warm, animated conversation' },
  adult: { src: '/images/adult.jpg', width: 1400, height: 787, alt: 'Adult individual therapy session' },
  // Reused photos for specific pages (same file, different semantic alt)
  children: { src: '/images/couples2.jpg', width: 1400, height: 787, alt: 'Young person meeting with a therapist' },
  anxiety: { src: '/images/warmchat.jpg', width: 1600, height: 1066, alt: 'Quiet moment of understanding in a therapy session' },
  autism: { src: '/images/therapist.jpg', width: 1400, height: 787, alt: 'Calm, supportive therapy environment' },
  depression: { src: '/images/adult.jpg', width: 1400, height: 787, alt: 'Individual working through difficult feelings with a therapist' },
  add: { src: '/images/teen1.jpg', width: 1400, height: 787, alt: 'Focused conversation in a therapy session' },
  coaching: { src: '/images/group.jpg', width: 1400, height: 787, alt: 'Coach and client in an engaged session' },
  teletherapy: { src: '/images/warmchat.jpg', width: 1600, height: 1066, alt: 'Connection and conversation in therapy' },
  about: { src: '/images/group.jpg', width: 1400, height: 787, alt: 'Warm conversation at the Presti Center' },
  staff: { src: '/images/therapist.jpg', width: 1400, height: 787, alt: 'Member of our clinical team' },
  workshop: { src: '/images/group.jpg', width: 1400, height: 787, alt: 'Connection and community in a group setting' },
  contact: { src: '/images/warmchat.jpg', width: 1600, height: 1066, alt: 'Welcoming environment at the Presti Center' },
  office: { src: '/images/therapist.jpg', width: 1400, height: 787, alt: 'Our therapy office' },
  // Staff portraits — all 800x1067 (3:4 portrait)
  staffJohanna: { src: '/images/staff/johanna.jpg', width: 800, height: 1067, alt: 'Portrait of Johanna Ciak, Director and Founder of the William A. Presti Center' },
  staffArica: { src: '/images/staff/arica.jpg', width: 800, height: 1067, alt: 'Portrait of Arica VanGelderen, Operations Director' },
  staffKisha: { src: '/images/staff/kisha.jpg', width: 800, height: 1067, alt: 'Portrait of Kisha Hath, Therapist and Clinical Supervisor' },
  staffMarcie: { src: '/images/staff/marcie.jpg', width: 800, height: 1067, alt: 'Portrait of Marcie Reznik, Certified Life Coach' },
  staffMitchell: { src: '/images/staff/mitchell.jpg', width: 800, height: 1067, alt: 'Portrait of Mitchell Brown, Clinical Mental Health Counselor and Coach' },
  staffSuzette: { src: '/images/staff/suzette.jpg', width: 800, height: 1067, alt: 'Portrait of Suzette Presti, Intake Manager' },
};
