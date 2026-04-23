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

// Curated Unsplash image IDs — warm, human, professionally calm
// Format: photo-{id} appended to https://images.unsplash.com/
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2400&q=80',
  warmChat: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1600&q=80',
  therapist: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80',
  couples: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  couples2: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80',
  teen: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
  group: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  adult: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=80',
  // Service-specific
  add: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
  anxiety: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1600&q=80',
  autism: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80',
  children: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1600&q=80',
  depression: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=1600&q=80',
  coaching: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
  teletherapy: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1600&q=80',
  staff: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80',
  about: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1600&q=80',
  workshop: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
  contact: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  office: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
};
