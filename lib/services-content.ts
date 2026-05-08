import { IMAGES } from './site';

type ImageRef = { src: string; width: number; height: number; alt: string };

export type ServiceContent = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  audience: string;
  heroImage: ImageRef;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[]; bulleted?: boolean }[];
  approach: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
  /** Optional real testimonial to display on this service page */
  testimonial?: {
    quote: string;
    author: string;
    context?: string;
    rating?: number;
  };
};

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: 'add-therapy',
    title: 'ADD / ADHD Therapy',
    shortTitle: 'ADD Therapy',
    metaTitle: 'ADD / ADHD Therapy in Brighton, MI | Children, Teens, Adults',
    metaDesc:
      'ADD and ADHD therapy in Brighton, MI for children, teens, and adults. Build focus, follow-through, and self-esteem in a strengths-based, supportive space.',
    audience: 'Children, Teens & Adults',
    heroImage: IMAGES.add,
    heroAlt: 'Person organizing notes in soft natural light',
    intro:
      'ADD is a neurological condition with psychological and social consequences. Children, teens, and adults need to understand that it is not their fault, they didn\'t cause it, and there is real hope. By the age of 6 or 7, ADD can already have a significant impact on self-esteem, and many people with ADD are misunderstood and have an inaccurate view of their own strengths. Our therapists and coaches work to help you or your loved one understand ADD, manage symptoms effectively, and see the genuine strengths that come with it.',
    sections: [
      {
        heading: 'Common signs — inattention',
        bulleted: true,
        body: [
          'Difficulty sustaining attention in tasks or play activities.',
          'Frequent mistakes in work or school-related activities that require attention to detail.',
          'Difficulty organizing tasks and activities.',
          'Avoidance of tasks that require sustained mental effort.',
          'Losing items needed for tasks and activities.',
          'Easily distracted by what\'s going on around you.',
          'Forgetfulness in daily activities.',
        ],
      },
      {
        heading: 'Common signs — impulsivity',
        bulleted: true,
        body: [
          'Difficulty waiting your turn in conversations or games.',
          'Making decisions quickly, without considering the consequences.',
        ],
      },
      {
        heading: 'How we can help',
        bulleted: true,
        body: [
          'We focus on building self-esteem.',
          'We provide tools to help you or your child understand ADD.',
          'We highlight the positive aspects of ADD, not just the challenges.',
          'We educate you about ADD. Understanding it is crucial to managing symptoms in a positive way.',
          'We adopt a strengths-based perspective in our treatment approach.',
          'Call us today for a confidential appointment.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT) adapted for ADHD',
      'Executive function coaching and skill-building',
      'Parent training and family systems support',
      'Mindfulness and emotional regulation tools',
      'Strengths-based, neurodiversity-affirming care',
    ],
    whoFor: [
      'Adults recently diagnosed (or wondering if they should be)',
      'Teens struggling with school, motivation, or self-esteem',
      'Children whose families want collaborative, non-shaming support',
      'Anyone tired of being told to "just try harder"',
    ],
    faqs: [
      {
        q: 'Do you diagnose ADHD?',
        a: 'We provide therapy and support, not formal psychological testing. If a diagnosis is needed, we can refer you to a trusted local provider for evaluation.',
      },
      {
        q: 'Do I need to be on medication to do therapy here?',
        a: 'No. Many of our clients use a combination of therapy and medication, others use therapy alone. We work alongside whatever path is right for you.',
      },
      {
        q: 'How long does ADHD therapy usually take?',
        a: 'There\'s no fixed timeline — some clients see meaningful change in 8–12 sessions, others find ongoing support helpful longer-term. We talk openly about progress as we go.',
      },
    ],
    related: ['anxiety-therapy', 'teenage-therapy', 'childrens-therapy'],
  },

  {
    slug: 'anxiety-therapy',
    title: 'Anxiety Therapy',
    shortTitle: 'Anxiety Therapy',
    metaTitle: 'Anxiety Therapy in Brighton, MI | Compassionate Care',
    metaDesc:
      'Compassionate anxiety therapy in Brighton, MI. Get tools to quiet the noise, ease panic, and feel grounded again. All ages. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.anxiety,
    heroAlt: 'Calm window light over a quiet seat',
    intro:
      'Anxiety can show up as racing thoughts, a tight chest, panic, constant worry, or just a feeling that something\'s off and you can\'t name why. Whatever shape it takes for you, you\'re not alone — and there are real ways through it.',
    sections: [
      {
        heading: 'What anxiety feels like',
        bulleted: true,
        body: [
          'Anxiety can leave you feeling powerless and uncertain, affecting both your emotions and your physical well-being.',
          'When it sticks around, it can lead to depression and persistent negative thoughts that wear down your quality of life.',
          'It can cause daily distress, interfering with your relationships, your decisions, and the things you used to enjoy.',
        ],
      },
      {
        heading: 'Symptoms to watch for',
        bulleted: true,
        body: [
          'Avoiding social situations out of fear of judgment or embarrassment.',
          'Sudden panic attacks, and the ongoing fear of when the next one might come.',
          'Irrational fears, or avoidance of certain places, objects, or situations.',
          'Recurring nightmares, flashbacks, or emotional numbness tied to past trauma.',
          'Physical symptoms — chest tightness, stomach upset, headaches, trouble sleeping.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Our therapists and coaches provide tools and strategies to manage anxiety when it\'s overwhelming, so you have something to reach for in the hard moments.',
          'We also help you trace the roots of your anxiety. Treatment focuses on resolving the events or circumstances underneath it, not just managing the symptoms on the surface.',
          'The goal is for you to live freely again. We\'re here to help you reclaim your life from anxiety that\'s been running the show.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Mindfulness and grounding techniques',
      'Somatic and nervous-system regulation tools',
      'Exposure-based work (when appropriate)',
      'Trauma-informed care',
    ],
    whoFor: [
      'Generalized anxiety, worry, or rumination',
      'Panic attacks',
      'Social anxiety',
      'Health anxiety',
      'Anxiety alongside depression, ADHD, or trauma',
    ],
    faqs: [
      {
        q: 'How long until I feel better?',
        a: 'Everyone\'s timeline is different — and we won\'t pretend otherwise. Some clients feel real relief in a few weeks; others need longer to work through what\'s underneath. We\'ll check in with you regularly so therapy is actually moving in a direction that helps.',
      },
      {
        q: 'I don\'t want to do anything that feels too intense. Is that okay?',
        a: 'Yes. We move at your pace, and you\'re always in charge. We\'ll never push you into something you\'re not ready for.',
      },
      {
        q: 'Can teletherapy help with anxiety?',
        a: 'Absolutely. Many people find it easier to start therapy from a familiar space at home, and the work is just as effective.',
      },
    ],
    related: ['depression-therapy', 'adult-counseling', 'teenage-therapy'],
    testimonial: {
      quote: "She opened my eyes, gave me a different point of view, pulled me out of some dark places and gave me tools to manage my stress, anxiety and toxic people. All at a price I could actually afford. I am in a much better place because of her.",
      author: 'Lisa M.',
      context: 'Google review',
      rating: 5,
    },
  },

  {
    slug: 'autism-spectrum-disorder',
    title: 'Autism Spectrum Therapy',
    shortTitle: 'Autism Spectrum Disorder',
    metaTitle: 'Autism Spectrum Support in Brighton, MI | Affirming Therapy',
    metaDesc:
      'Neurodiversity-affirming therapy for autistic children, teens, and adults in Brighton, MI. Support that respects how your brain works. $82 flat fee. HSA qualified.',
    audience: 'Children, Teens & Adults',
    heroImage: IMAGES.autism,
    heroAlt: 'Soft natural light through warm textured curtains',
    intro:
      'Autistic people don\'t need to be fixed. They need spaces that understand them. Our work with autistic clients of every age is rooted in neurodiversity-affirming principles. We honor how your brain works, support the things that are genuinely hard, and never ask you to mask in our office.',
    sections: [
      {
        heading: 'What we mean by affirming',
        body: [
          'A lot of the support available to autistic people focuses on making them appear less autistic. That\'s not what we do.',
          'We work with you, not on you. Our goal isn\'t to change who you are. It\'s to help with the things that genuinely make life harder, like sensory overwhelm, burnout, social exhaustion, and the experience of being misunderstood.',
          'For parents of autistic kids, we offer education, communication strategies, and a space to process the emotional reality of advocating for a child the world isn\'t built for.',
        ],
      },
      {
        heading: 'What we can support',
        bulleted: true,
        body: [
          'Autistic burnout, sensory regulation, and emotional overwhelm.',
          'Worry and low mood that often travel alongside being autistic in a non-autistic world.',
          'Identity and self-understanding, especially for late-diagnosed adults.',
          'Communication skills and self-advocacy.',
          'Social connection, friendships, and relationships on your terms.',
          'For teens and young adults, the transitions that often hit hard: changing schools, leaving home, entering the workforce, navigating relationships.',
        ],
      },
      {
        heading: 'How we can help',
        body: [
          'Our therapists and coaches meet you where you are, with care and without judgment. We listen carefully and adjust the work to fit you, rather than asking you to fit the work.',
          'We also collaborate with parents, partners, and family members when that\'s helpful, so the people in your life can be part of the support.',
          'You\'re welcome here whether you have a formal diagnosis or are still figuring it out.',
        ],
      },
    ],
    approach: [
      'Neurodiversity-affirming framework',
      'CBT adapted for autistic cognition',
      'Sensory and burnout-recovery support',
      'Family education and parent coaching',
      'Identity exploration and self-advocacy work',
    ],
    whoFor: [
      'Children and teens diagnosed with ASD',
      'Adults newly diagnosed or self-identifying',
      'Parents seeking guidance and support',
      'Autistic clients dealing with co-occurring anxiety, depression, or trauma',
    ],
    faqs: [
      {
        q: 'Do you require a formal autism diagnosis to begin therapy?',
        a: 'No. Many of our adult clients are self-identified or in the process of seeking diagnosis. You\'re welcome here either way.',
      },
      {
        q: 'Is your approach ABA-based?',
        a: 'No. We are neurodiversity-affirming and do not practice or recommend behaviorist approaches focused on suppressing autistic traits.',
      },
      {
        q: 'Can you work with my whole family?',
        a: 'Yes. We frequently support parents and siblings alongside our work with the autistic family member.',
      },
    ],
    related: ['childrens-therapy', 'teenage-therapy', 'anxiety-therapy'],
  },

  {
    slug: 'childrens-therapy',
    title: "Children's Therapy",
    shortTitle: "Children's Therapy",
    metaTitle: "Children's Therapy in Brighton, MI | Ages 5–12",
    metaDesc:
      "Compassionate children's therapy in Brighton, MI. Helping kids build confidence, emotional skills, and healthy coping with supportive, family-focused care.",
    audience: 'Ages 5–12',
    heroImage: IMAGES.children,
    heroAlt: 'Child\'s drawing supplies on a sunlit table',
    intro:
      'Children can experience anxiety, depression, and anger. These overwhelming feelings may cause kids to act out or withdraw, and that can be frightening for both children and parents. Our work with younger clients creates a safe, playful space where kids can learn to name what they\'re feeling and find healthy ways to move through it.',
    sections: [
      {
        heading: 'How we help your child',
        bulleted: true,
        body: [
          'We validate the big feelings children experience, including worry, sadness, and anger.',
          'We understand that overwhelming emotions can lead to acting out or withdrawing, and we meet kids where they are.',
          'We offer support to children and parents alike, because experiences like these are hard on the whole family.',
        ],
      },
      {
        heading: 'What we help children with',
        bulleted: true,
        body: [
          'Anxiety and worry',
          'Depression and sadness',
          'Anger related to divorce, loss, trauma, or school stress',
          'Emotional dysregulation, big feelings, and trouble at home or school',
          'Adjustment to major changes',
        ],
      },
      {
        heading: 'Creative tools for healing',
        bulleted: true,
        body: [
          'We use creative, engaging tools to help children release difficult feelings.',
          'Play, art, and story help kids process emotions tied to traumatic events in a way that fits how they actually communicate.',
        ],
      },
      {
        heading: 'How we partner with parents',
        bulleted: true,
        body: [
          'We collaborate with parents on new communication skills and strategies for home.',
          'We help re-establish positive rapport between you and your child.',
          'Your feedback is welcomed throughout — you know your child best, and we work as a team.',
          'We protect your child\'s sense of trust and privacy while keeping you informed at the right level.',
        ],
      },
    ],
    approach: [
      'Play therapy and expressive arts',
      'Cognitive Behavioral Therapy (CBT) adapted for kids',
      'Parent coaching and family involvement',
      'Trauma-informed, attachment-based care',
      'Mindfulness and emotional regulation skills',
    ],
    whoFor: [
      'Children ages 5–12 navigating anxiety, sadness, or behavioral challenges',
      'Families going through divorce, loss, or major transition',
      'Parents looking for guidance and partnership',
      'Children with ADHD, ASD, or emotional dysregulation',
    ],
    faqs: [
      {
        q: 'Will I be involved in my child\'s therapy?',
        a: 'Yes. Parent involvement is essential. We\'ll meet with you regularly to share what we\'re working on, discuss strategies for home, and answer your questions — while also protecting your child\'s sense of trust and privacy.',
      },
      {
        q: 'My child is nervous about coming in. What should I tell them?',
        a: 'Many kids feel nervous before their first session. We keep first sessions playful and low-pressure — think more "getting to know each other" than "talking about problems." We\'re happy to talk through introductions on the phone before your first visit.',
      },
      {
        q: 'How often will we come in?',
        a: 'Weekly is typical for the first stretch, then we taper as things stabilize. We\'ll review the plan with you regularly.',
      },
    ],
    related: ['teenage-therapy', 'add-therapy', 'autism-spectrum-disorder'],
    testimonial: {
      quote: "My wife and I were a little skeptical about using a counseling service for our kids but we decided to try the Presti Center. It turned out to be just what we needed — a safe, friendly atmosphere where our kids could open up to someone besides Dad and Mom. Our kids stated that they would definitely return for more counseling if ever needed.",
      author: 'K. Bell',
      context: 'Parent of child clients',
      rating: 5,
    },
  },

  {
    slug: 'depression-therapy',
    title: 'Depression Therapy',
    shortTitle: 'Depression Therapy',
    metaTitle: 'Depression Therapy in Brighton, MI | Compassionate Care',
    metaDesc:
      'Depression therapy in Brighton, MI providing compassionate support to help you manage symptoms and regain balance. Confidential, caring sessions for all ages.',
    audience: 'All Ages',
    heroImage: IMAGES.depression,
    heroAlt: 'Soft morning light through a quiet window',
    intro:
      'Depression can show up as more than sadness. It can feel like exhaustion, numbness, irritability, or a heaviness that makes ordinary things feel impossibly hard. Whatever it looks like for you, you don\'t have to push through it alone.',
    sections: [
      {
        heading: 'Common symptoms of depression',
        bulleted: true,
        body: [
          'Persistent sadness or an anxious, "empty" mood',
          'Changes in sleep patterns — sleeping too much or too little',
          'Changes in appetite — eating too much or too little',
          'Loss of interest or lack of pleasure in things you used to enjoy',
          'Restlessness or irritability',
          'Persistent physical symptoms that don\'t respond to treatment, like headaches, chronic pain, or digestive issues',
          'Difficulty concentrating, remembering, or making decisions',
          'Fatigue or loss of energy',
          'Feelings of guilt, hopelessness, or worthlessness',
        ],
      },
      {
        heading: 'Impact of depression',
        bulleted: true,
        body: [
          'It can lead to feelings of isolation, shame, and loneliness.',
          'In severe cases, it can lead to thoughts of suicide and the feeling of not being able to keep fighting. If you\'re experiencing these, please reach out to us or call 988 (Suicide & Crisis Lifeline) right away.',
        ],
      },
      {
        heading: 'Managing depression',
        bulleted: true,
        body: [
          'Depression can be managed with the right help and support.',
          'Reaching out is the first step. Therapy provides awareness and tools that allow for a real shift in how you experience your life.',
        ],
      },
      {
        heading: 'How we can help',
        bulleted: true,
        body: [
          'You don\'t have to face depression alone.',
          'Our caring and experienced therapists are here to help you understand what\'s going on and find a way through it.',
          'Call us for a confidential appointment and take the first step toward healing.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Behavioral activation',
      'Mindfulness-based approaches',
      'Trauma-informed care',
      'Coordination with prescribers when medication is part of your care',
    ],
    whoFor: [
      'Adults living with persistent low mood, exhaustion, or numbness',
      'Teens whose depression shows up as withdrawal, irritability, or self-criticism',
      'New parents navigating postpartum depression',
      'People whose depression is tied to grief, trauma, or major life change',
    ],
    faqs: [
      {
        q: 'I don\'t have the energy to start therapy. What if I can\'t commit?',
        a: 'This is one of the hardest parts of depression — the very thing that would help feels impossible. We start small. The first step is just one phone call. We\'ll go from there.',
      },
      {
        q: 'Do I need medication?',
        a: 'Not necessarily. Many clients do well with therapy alone. For others, a combination is most effective. We can refer you to a trusted prescriber if needed.',
      },
      {
        q: 'I\'m worried about safety — for myself or someone I love. What should I do?',
        a: 'If you or someone you love is in immediate danger, call 988 (Suicide & Crisis Lifeline) or 911. We\'re also here to talk and help you find the right next step — please reach out.',
      },
    ],
    related: ['anxiety-therapy', 'adult-counseling', 'teenage-therapy'],
  },

  {
    slug: 'couples-counseling',
    title: 'Couples Counseling',
    shortTitle: 'Couples Counseling',
    metaTitle: 'Couples Counseling in Brighton, MI | Strengthen Your Relationship',
    metaDesc:
      'Professional couples counseling in Brighton, MI to improve communication, rebuild trust, and reconnect. Experienced therapists offering in-person and online sessions.',
    audience: 'Couples',
    heroImage: IMAGES.couples,
    heroAlt: 'Couple sitting together in soft natural light',
    intro:
      'Whether you and your partner are working through a hard patch or just want to deepen what you have, our therapists and coaches offer a safe place to express your feelings openly and honestly. We partner with you to move the relationship in a positive direction.',
    sections: [
      {
        heading: 'How we can help',
        bulleted: true,
        body: [
          'We help you develop new, healthy ways to communicate with your partner.',
          'We provide a safe place for couples to express their feelings openly and without judgment.',
          'We encourage couples to partner with each other to move the relationship in a positive direction.',
          'We help you remember and build on the strengths in your relationship, especially when stress has made those strengths hard to see.',
          'We help re-establish positive rapport so you can begin to reverse negative dynamics.',
          'We work with you to resolve old conflicts that drain the relationship and block honest communication.',
          'We help you understand the root issues that are getting in the way of closeness and connection.',
          'We move from understanding what\'s underneath to giving you new tools you can use together.',
        ],
      },
      {
        heading: 'Our mission',
        bulleted: true,
        body: [
          'To help couples embark on a new, hopeful journey together.',
          'To support you whether you\'re working to heal what\'s broken, or trying to build something stronger from a relationship that\'s already good.',
          'To meet you where you are, with both partners feeling heard and respected.',
        ],
      },
      {
        heading: 'How to get started',
        body: [
          'Call us today to take the first step. We offer evening appointments and teletherapy options to make it easier to commit to the work, no matter your schedule.',
        ],
      },
    ],
    approach: [
      'Emotionally Focused Therapy (EFT) principles',
      'Gottman-informed methods',
      'Communication and conflict-resolution skill-building',
      'Trust-repair and infidelity recovery work',
      'Discernment counseling for couples uncertain about staying',
    ],
    whoFor: [
      'Couples feeling distant, disconnected, or stuck',
      'Couples recovering from infidelity or betrayal',
      'Couples preparing for marriage or major life change',
      'Couples who fight the same fight on repeat',
      'Couples figuring out whether to stay together',
    ],
    faqs: [
      {
        q: 'What if my partner doesn\'t want to come?',
        a: 'It\'s common for one partner to be more hesitant. Sometimes a single session — just to ask questions — is enough to ease that. You\'re also welcome to start individual work; it can change the relationship even when only one person comes in.',
      },
      {
        q: 'Do you work with non-monogamous couples?',
        a: 'Yes. We work with couples and partnerships of all configurations.',
      },
      {
        q: 'How long does couples therapy take?',
        a: 'Many couples see meaningful change in 12–20 sessions. Trust repair and deeper work can take longer. We\'ll talk openly about progress and timeline as we go.',
      },
    ],
    related: ['couples-coaching', 'adult-counseling', 'family-workshop'],
    testimonial: {
      quote: "She has helped me individually and through couples therapy. She is the only therapist I have ever felt safe with and always gives honest and constructive feedback. She is not afraid to tell you the things you may not want to hear. I don't know where I would be without her help through some very difficult times.",
      author: 'J. D.',
      context: 'Google review',
      rating: 5,
    },
  },

  {
    slug: 'couples-coaching',
    title: 'Couples Coaching',
    shortTitle: 'Couples Coaching',
    metaTitle: 'Couples Coaching in Brighton, MI | Build a Stronger Relationship',
    metaDesc:
      'Professional couples coaching designed to improve communication, rebuild trust, and strengthen emotional connection. Personalized support from a Certified Couples Coach.',
    audience: 'Couples',
    heroImage: IMAGES.couples2,
    heroAlt: 'Two people holding hands at sunset, in a moment of connection',
    intro:
      'Every relationship has its seasons, and a strong relationship is something you build together. Our Certified Couples Coach has successfully guided couples through everything from quick recalibrations to deeper work, with practical tools and steady support.',
    sections: [
      {
        heading: 'How we can help',
        bulleted: true,
        body: [
          'Effective communication skills — teaching couples how to express thoughts and feelings clearly and respectfully.',
          'Fostering empathy — encouraging partners to understand and appreciate each other\'s perspectives.',
          'Active listening — making sure both partners feel heard and valued.',
          'A supportive environment where you can share without fear of judgment or backlash.',
          'Identifying triggers — recognizing what tends to lead to conflict.',
          'Understanding underlying issues — exploring the root causes of disagreements so you can address what\'s really going on.',
          'Problem-solving strategies — working together toward solutions instead of blame.',
          'Collaboration over confrontation — emphasizing teamwork and partnership in resolving disputes.',
          'Stronger relationships — conflict resolution that builds mutual respect and emotional connection.',
        ],
      },
      {
        heading: 'Services offered',
        bulleted: true,
        body: [
          'Resolution of short and long-term conflicts',
          'Life transition support',
          'Grief and loss',
          'Understanding and resolving negative communication styles',
          'Pre-marital support',
          'Pre and post-divorce support',
          'Negative self-beliefs',
          'Financial stress',
        ],
      },
      {
        heading: 'Why choose us',
        body: [
          'Our Couples Coach has years of experience navigating relationship dynamics. We are committed to you and to helping you build a stronger, more fulfilling relationship.',
        ],
      },
    ],
    approach: [
      'Skill-based and goal-driven',
      'Structured frameworks for communication and conflict',
      'Between-session practice and accountability',
      'Vision and values alignment',
      'Shorter-term, focused work',
    ],
    whoFor: [
      'Pre-marital couples wanting a strong foundation',
      'New parents recalibrating their partnership',
      'Couples in fundamentally healthy relationships seeking growth',
      'Couples wanting practical tools without deep clinical work',
    ],
    faqs: [
      {
        q: 'Is coaching covered by insurance or HSA?',
        a: 'Coaching is not typically billable to insurance, but most HSA accounts cover it. We\'re happy to provide receipts.',
      },
      {
        q: 'Can we switch from coaching to counseling if we need to?',
        a: 'Yes. We\'ll talk openly with you about what\'s working and what isn\'t, and shift gears if needed.',
      },
      {
        q: 'Do you offer virtual coaching?',
        a: 'Yes — many couples find the convenience of teletherapy makes it easier to commit to the work.',
      },
    ],
    related: ['couples-counseling', 'coaching-and-mentoring', 'adult-counseling'],
  },

  {
    slug: 'teenage-therapy',
    title: 'Teen Therapy',
    shortTitle: 'Teen Therapy',
    metaTitle: 'Teen Therapy in Brighton, MI | Ages 13–18',
    metaDesc:
      'Supportive teen therapy in Brighton, MI. Helping adolescents build confidence, manage emotions, reduce stress, and navigate challenges with compassionate care.',
    audience: 'Ages 13–18',
    heroImage: IMAGES.teen,
    heroAlt: 'Teenager looking thoughtfully out a sunlit window',
    intro:
      'Adolescence is a time of rapid change, emotional growth, and unique challenges. We specialize in supporting teens through these years with personalized therapy that fosters resilience, confidence, and emotional well-being.',
    sections: [
      {
        heading: 'Why teen therapy matters',
        body: [
          'Teens today face pressures that can feel overwhelming — academic stress, social dynamics, identity exploration, and mental health struggles. Therapy provides a safe space to process these experiences, build coping skills, and develop a stronger sense of self.',
        ],
      },
      {
        heading: 'Help your teen break free from screen overuse',
        body: [
          'In today\'s digital world, excessive use of the internet, TV, and video games can affect a teen\'s mental health, academic performance, and family relationships. We offer specialized therapy to help teens regain balance, develop healthy habits, and reconnect with real-life experiences. Our approach addresses the underlying emotional challenges while building positive coping strategies for long-term success.',
        ],
      },
      {
        heading: 'What we treat',
        bulleted: true,
        body: [
          'Anxiety and panic',
          'Depression',
          'Trauma and PTSD',
          'Self-harm',
          'Suicidal thoughts',
          'Low self-esteem',
          'Body image concerns',
          'Family conflict',
          'Communication issues with peers',
          'School-related stress',
          'Grief and loss',
          'ADHD',
          'Autism spectrum support',
          'Screen and video game overuse',
        ],
      },
      {
        heading: 'Our approach',
        bulleted: true,
        body: [
          'Cognitive Behavioral Therapy (CBT)',
          'Trauma-informed care',
          'Play and art therapy',
          'Mindfulness and emotional regulation techniques',
          'Solution-focused therapy',
        ],
      },
      {
        heading: 'What to expect',
        bulleted: true,
        body: [
          'A confidential intake session to understand your teen\'s needs and goals.',
          'A personalized therapy plan with weekly sessions.',
          'Parents included in the process through optional family sessions and progress check-ins.',
          'In-person therapy at our Brighton office, secure teletherapy for flexible access, and evening appointments to fit busy schedules.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Dialectical Behavior Therapy (DBT) skills',
      'Mindfulness and somatic regulation',
      'Trauma-informed care',
      'Family and parent coaching as needed',
    ],
    whoFor: [
      'Teens with anxiety, depression, or overwhelm',
      'Teens navigating identity, including LGBTQ+ youth',
      'Teens dealing with bullying, social conflict, or peer issues',
      'Teens after a major loss, change, or trauma',
      'Families looking for support during the teen years',
    ],
    faqs: [
      {
        q: 'Will you tell my parents what I say?',
        a: 'Therapy is confidential. We share general updates with parents (how things are going, what we\'re working on) but specifics of what you share stay between us — unless you\'re in danger or someone else is. We\'ll go over this clearly in the first session so you know exactly what to expect.',
      },
      {
        q: 'My teen really doesn\'t want to come. What should I do?',
        a: 'It\'s common. We sometimes start with a single "no commitment" session — just to meet, ask questions, see if it feels okay. Most teens are surprised by how different therapy feels once they\'re actually in the room.',
      },
      {
        q: 'Do you offer evening sessions?',
        a: 'Yes. We have evening hours specifically because we know after-school time is precious for teens and families.',
      },
    ],
    related: ['teen-coaching', 'anxiety-therapy', 'depression-therapy'],
    testimonial: {
      quote: "I left a message after hours and got a call the next morning from the owner. She spoke to me for a half hour on the phone and said she had the right therapist for my daughter. I was so impressed. We have been to a few different places and nothing compares to how our therapist handles teenagers. Go here with confidence.",
      author: 'M. F.',
      context: 'Parent of teen client',
      rating: 5,
    },
  },

  {
    slug: 'teen-coaching',
    title: 'Teen Coaching',
    shortTitle: 'Teen Coaching',
    metaTitle: 'Teen Coaching in Brighton, MI | Mentoring & Goals',
    metaDesc:
      'Goal-driven teen coaching in Brighton, MI for ages 13–18. School, friendships, identity, and what comes next. $82 flat fee. HSA qualified.',
    audience: 'Ages 13–18',
    heroImage: IMAGES.conversation,
    heroAlt: 'Two people in a focused, supportive conversation',
    intro:
      'Teen coaching is mentoring with structure. It\'s for teens who don\'t need clinical therapy but want a trusted adult in their corner. Someone outside of family and school who can help them set goals, build skills, and figure out who they want to be.',
    sections: [
      {
        heading: 'What coaching can focus on',
        bulleted: true,
        body: [
          'Time management, study skills, and academic focus.',
          'Friendship and social confidence.',
          'Identity, values, and self-understanding.',
          'Decision-making and planning for what comes after high school.',
          'Healthy habits around sleep, screens, and well-being.',
          'Confidence, leadership, and follow-through.',
        ],
      },
      {
        heading: 'How coaching works',
        body: [
          'There\'s real value in having an adult who isn\'t grading you, raising you, or evaluating you. Our coaches step into that role with care: present, honest, and on your teen\'s side.',
          'Sessions are collaborative. Your teen sets the goals, and we partner with them to actually move toward them. The work is shorter-term and more action-oriented than therapy.',
          'If we notice clinical concerns come up — worry, low mood, trauma — we\'ll talk openly about whether therapy is a better fit, and help make that handoff.',
        ],
      },
      {
        heading: 'How we partner with parents',
        body: [
          'We talk with you about how to support your teen\'s goals at home, and we keep you in the loop on the work in age-appropriate ways.',
          'As with our therapy work, we protect the trust we\'re building with your teen. We\'ll share general updates and be clear about what stays between us, so your teen knows their coaching space is theirs.',
        ],
      },
    ],
    approach: [
      'Goal-setting and accountability frameworks',
      'Strengths-based mentoring',
      'Skill-building (executive function, communication, decision-making)',
      'Between-session practice and feedback',
      'Collaboration with parents on age-appropriate involvement',
    ],
    whoFor: [
      'Teens who want a mentor in their corner',
      'High-achievers facing burnout, perfectionism, or pressure',
      'Teens navigating identity, friendships, and growth',
      'Teens preparing for college, gap years, or post-high-school life',
    ],
    faqs: [
      {
        q: 'How is coaching different from therapy?',
        a: 'Coaching is forward-focused, action-oriented, and shorter-term. Therapy goes deeper into history, healing, and clinical concerns. Some teens benefit from one, some from the other, and some from both at different times.',
      },
      {
        q: 'Is coaching covered by insurance?',
        a: 'Coaching isn\'t typically insurance-billable, but it\'s usually HSA-eligible. We provide receipts.',
      },
      {
        q: 'Can my teen do coaching virtually?',
        a: 'Yes — many teens love the convenience of meeting from their own space.',
      },
    ],
    related: ['teenage-therapy', 'coaching-and-mentoring', 'add-therapy'],
  },

  {
    slug: 'coaching-and-mentoring',
    title: 'Coaching & Mentoring',
    shortTitle: 'Coaching & Mentoring',
    metaTitle: 'Life Coaching & Mentoring in Brighton, MI | Certified Coaches',
    metaDesc:
      'Certified life coaching and mentoring in Brighton, MI. Goal-focused, accountable, and grounded in real growth. $82 flat fee. HSA qualified.',
    audience: 'All Ages',
    heroImage: IMAGES.coaching,
    heroAlt: 'Mentor and client in a focused, warm conversation',
    intro:
      'Coaching is a partnership for change. It\'s for people who know there\'s a next chapter — in career, relationships, health, identity, or purpose — and want a structured, accountable space to actually get there. Our certified coaches bring real training, real warmth, and real honesty.',
    sections: [
      {
        heading: 'When coaching helps',
        bulleted: true,
        body: [
          'When you\'re at a career or life crossroads and want help thinking it through.',
          'When you\'re working on habits, health, or a redesign of how you spend your days.',
          'When you want to build communication or relationship skills with structure and accountability.',
          'When you\'re sorting out values, identity, or what matters most to you now.',
          'When you\'re facing a major decision: whether to stay, leave, start, or finish.',
        ],
      },
      {
        heading: 'What coaching looks like',
        body: [
          'Coaching tends to be shorter-term, more action-oriented, and structured around clear goals you set.',
          'You\'ll do real work between sessions, with a partner holding the bar steady. Most clients see meaningful progress in 6 to 12 sessions, though some choose to continue longer for ongoing accountability.',
          'We work with adults at every stage — early career, mid-life, post-retirement — and with teens through our dedicated teen coaching track.',
        ],
      },
      {
        heading: 'How coaching is different from therapy',
        body: [
          'Coaching is forward-focused. We\'re less interested in unpacking why something happened and more interested in what you want now and what\'s in the way.',
          'Our coaches are part of a clinical center, so if therapy turns out to be the better fit, we say so, and the handoff is seamless. A quick conversation up front is usually enough to figure out which one makes sense for you.',
        ],
      },
    ],
    approach: [
      'Certified coaching methodology',
      'Goal-setting, accountability, and structured frameworks',
      'Strengths-based and forward-focused',
      'Between-session practice and reflection',
      'Clear referrals to therapy when appropriate',
    ],
    whoFor: [
      'Adults at career or life crossroads',
      'High-performers wanting structure, accountability, and growth',
      'Anyone navigating a major transition (relationship, role, identity)',
      'People who tried therapy and want something more action-oriented',
    ],
    faqs: [
      {
        q: 'How is coaching billed?',
        a: 'Coaching is $82 per session, the same as our therapy rate. It\'s usually HSA-eligible but typically not insurance-billable.',
      },
      {
        q: 'How do I know if I need coaching or therapy?',
        a: 'A quick conversation is usually enough to figure that out. We\'re happy to talk through your goals and recommend the better fit.',
      },
      {
        q: 'How long does coaching take?',
        a: 'Most clients see real progress in 6–12 sessions, though some choose to continue longer for ongoing accountability.',
      },
    ],
    related: ['adult-counseling', 'couples-coaching', 'teen-coaching'],
  },

  {
    slug: 'adult-counseling',
    title: 'Adult Counseling',
    shortTitle: 'Adult Counseling',
    metaTitle: 'Adult Counseling & Therapy in Brighton, MI | Individual Sessions',
    metaDesc:
      'Adult counseling and individual therapy in Brighton, MI. A confidential space to be heard — for anxiety, life transitions, grief, and more. $82 flat fee. HSA qualified.',
    audience: 'Adults',
    heroImage: IMAGES.adult,
    heroAlt: 'Adult in calm individual therapy session',
    intro:
      'We serve adults who are in all walks of life — caring for others, working hard, building lives. Therapy is a space to grow alongside all of that: to know yourself better, sharpen your relationships, and live with more intention. Whether or not you have a specific problem, everyone deserves a thoughtful space.',
    sections: [
      {
        heading: 'We are here for you any time',
        body: [
          'Therapy is for any season of life. Plenty of our clients come in feeling steady, and use the space for clarity, growth, and getting to know themselves better.',
          'Others come during a clear life challenge — a divorce, a death, a diagnosis, a major decision. Both are meaningful reasons to be here, and we\'re glad to be here with you.',
        ],
      },
      {
        heading: 'What we work with',
        body: [
          'Anxiety, depression, stress, and burnout. Grief and loss. Trauma and the long shadow it can cast. Relationship struggles — partners, family, friends, work. Major life transitions: divorce, parenthood, empty nesting, retirement. Identity, purpose, and meaning. Patterns that keep repeating despite your best efforts. Substance use and addiction. Codependency. Self-esteem.',
          'Sessions are collaborative, paced to you, and grounded in real care. We don\'t do generic therapy — we work with the specific human in front of us.',
        ],
      },
    ],
    approach: [
      'Cognitive Behavioral Therapy (CBT)',
      'Trauma-informed care',
      'Mindfulness and somatic approaches',
      'Insight-oriented and relational work',
      'Coordination with prescribers and other providers as needed',
    ],
    whoFor: [
      'Adults navigating anxiety, depression, or stress',
      'Adults processing grief, trauma, or major loss',
      'Adults in life transitions — divorce, career, parenthood, midlife',
      'Adults feeling stretched thin, overwhelmed, or close to burnout',
      'Anyone wanting a confidential space to be heard',
    ],
    faqs: [
      {
        q: 'What if I\'m not sure what to talk about?',
        a: 'That\'s normal. Many clients come in not quite knowing where to start. Part of what we do is help you find the threads.',
      },
      {
        q: 'Do you accept insurance?',
        a: 'We are a flat-fee practice at $82 per session. Many clients use HSA funds, and we can provide superbills for out-of-network reimbursement if your plan offers it.',
      },
      {
        q: 'How often will we meet?',
        a: 'Weekly is standard, especially at the start. As things stabilize, some clients shift to every other week or as-needed.',
      },
    ],
    related: ['anxiety-therapy', 'depression-therapy', 'coaching-and-mentoring'],
    testimonial: {
      quote: "I've seen my therapist on and off for over a year. I always felt comfortable talking to her, and she has helped me so much. Scheduling was super easy and convenient. I would highly recommend her and the WAP Center.",
      author: 'Erin K.',
      context: 'Google review',
      rating: 5,
    },
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
